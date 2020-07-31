import flask
from flask import Flask, jsonify, request, render_template ,url_for
import face_recognition
from io import BytesIO
import io
from PIL import Image,ImageDraw
import numpy as np
import json
from pymongo import MongoClient
import base64
import zlib
from flask import send_file,Response,make_response
from flask_cors import CORS

app = Flask(__name__)


'''
Developed by:
SAHIL BHATT, VINAY KUMAR TADEPALLI, AMOGH TIWARI, UMESH CHANDRA POLA 
@2020

This code explains all the functions used to perform face-recognition as well as the communication 
mechanism between the app and server.
Installation of the libraries above via 'pip' command is necessary in order for this code to run
''' 
###################################################################################################################





#CORS - necessary to allow cross-origin requests
CORS(app)

# Connect to mongoDB
# Use the line below if using mongodb locally. Other URLs may also be given, such as a server on MongoDB Atlas
client =  MongoClient('mongodb://127.0.0.1:27017')

#Creating database 'Face_details', with collection named 'pics'
db=client.Face_details
db=db.pics

imgBytes="Initial"

#Home route- only returns "Face detection server" to the user upon access
@app.route("/",methods= ['GET','POST'])
def index():
    return "Face detection server"

#For testing purposes only
@app.route("/textchecker",methods= ['GET','POST'])
def textchange():

    city = request.data
    print("HI")
    print(city)
    return city


#This was used in an earlier version for sending image to the app. NOT USED IN CURRENT VERSION
@app.route("/getimage", methods= ['GET','POST'])
def getimg():
    response=make_response(imgBytes)
    response.headers['Content-Transfer-Encoding']='base-64'
    return response




#Function that saves images uploaded directly via Camera
@app.route("/cameraupload/<uname>",methods = ['GET','POST'])
def camsave(uname):
    
    #uname is the name that is entered in the app - name of the person in the photo
    print(uname) 
    scr = request.data
    pcr = base64.decodebytes(scr)
    
    # 'to_save.png' file is opened and all the byte data obtained previously is stored in it
    f=open('to_save.png','wb')
    f.write(pcr)
    f.close()

    #Here, the file is loaded and face_recognition functions are used to identify the face in the image and obtain encodings
    new_image=face_recognition.load_image_file('to_save.png')
    face_locations=face_recognition.face_locations(new_image)
    face_encodings = face_recognition.face_encodings(new_image, face_locations) 
    new_image_encoding=face_recognition.face_encodings(new_image)[0]


    #The db.insert line inserts the following into the database
    # 1. Image encodings
    # 2. Name of the person
    # 3. Path
    # 4. The image bytes itself, in a compressed format using zlib.compress
    db.insert({"encoded_img" : list(new_image_encoding), "name" : uname, "path" : './', "image" : zlib.compress(pcr)})

    return jsonify({'result':'Success'})


#Function that saves images that were uploaded via the filesystem/gallery
@app.route("/imageupload/<uname>",methods = ['GET','POST'])
def imgsave(uname):

    #uname is the name that is entered in the app - name of the person in the photo
    print(uname) 

    scr = request.data
    #Here, scr is directly in the bytes format, unlike camera images which had to be decoded first.
    # 'to_save.png' file is opened and all the byte data obtained previously is stored in it
    f=open('to_save.png','wb')
    f.write(scr)
    f.close()

    #Here, the file is loaded and face_recognition functions are used to identify the face in the image and obtain encodings
    new_image=face_recognition.load_image_file('to_save.png')
    face_locations=face_recognition.face_locations(new_image)
    face_encodings = face_recognition.face_encodings(new_image, face_locations)
    new_image_encoding=face_recognition.face_encodings(new_image)[0]


    #The db.insert line inserts the following into the database
    # 1. Image encodings
    # 2. Name of the person
    # 3. Path
    # 4. The image bytes itself, in a compressed format using zlib.compress
    db.insert({"encoded_img" : list(new_image_encoding), "name" : uname, "path" : './', "image" : zlib.compress(scr)})

    return jsonify({'result':'Success'})




# This function is used to FIND A MATCH for image uploaded via GALLERY/FILESYSTEM and IDENTIFY the person in the image
@app.route("/imagematch",methods = ['GET','POST'])
def imgmatch():


    scr = request.data

    #Here, scr is directly in the bytes format, unlike camera images which had to be decoded first.
    # 'clicked_img.png' file is opened and all the byte data obtained previously is stored in it
    f=open('clicked_img.png','wb')
    f.write(scr)
    f.close()

    #Query the database for all images using db.find()
    db_data1 = db.find()
    
    #Store all encodings in a list
    known_face_encodings=[data['encoded_img'] for data in db_data1]
    
    #Load the 'clicked_img.png' file (the image for which we wish to identify)
    unknown_image = face_recognition.load_image_file('clicked_img.png')

    #Identify the face location in the image, and create image out of it that will be modified and sent to app
    face_locations = face_recognition.face_locations(unknown_image)
    face_encodings = face_recognition.face_encodings(unknown_image, face_locations)
    pil_image = Image.fromarray(unknown_image)
    draw = ImageDraw.Draw(pil_image)
    
    for (top, right, bottom, left), face_encoding in zip(face_locations, face_encodings):
        #Compare the image encodings with the pre-existing list of encodings in database
        matches = face_recognition.compare_faces(known_face_encodings, face_encoding)

        #Setting values for the identified-name
        name = "Unknown"
        Compared_face = "Null"

        #Find the best match between current images and those in database
        face_distances = face_recognition.face_distance(known_face_encodings, face_encoding)
        best_match_index = np.argmin(face_distances)

        #If a match is found
        if matches[best_match_index]:
            #Get all the details like name, encodings etc using other fields in the database
            details = db.find({'encoded_img' : known_face_encodings[best_match_index]})
            details = details[0]
            name = details['name']
            Compared_face = zlib.decompress(details['image']) #decompress the image because the images were earlier in a compressed format in database

            #The 'db.insert' line below can be uncommented if one wishes to add even the image for match into the database;
            #in that case we will have more than one images for the same person in the database,
            #which can provide better results.

            # db.insert({"encoded_img" : list(face_encoding), "name" :known_face_names[best_match_index] , "path" : './', "image":zlib.compress(known_face_pics[best_match_index])})


        #Draw a box around the face in the image
        draw.rectangle(((left, top), (right, bottom)), outline=(0, 0, 255))

        #Write the name of the person identified in the box
        text_width, text_height = draw.textsize(name)
        draw.rectangle(((left, bottom - text_height - 10), (right, bottom)), fill=(0, 0, 255), outline=(0, 0, 255))
        draw.text((left + 6, bottom - text_height - 5), name, fill=(255, 255, 255, 255))


    del draw

    #The 'pil_image.show()' line below can be uncommented if one wishes to view the image locally in the server.
    #It will automatically be displayed while the server is running

    # pil_image.show()

    #The lines below are used to send the original image(identified with name), the matched image, along with the face_name
    #Note: The image bytes are encoded into base64 before sending it back to the app.
    imgBytes=BytesIO()
    pil_image.save(imgBytes,format='PNG')
    encoded_img = base64.encodebytes(imgBytes.getvalue()).decode('ascii')
    Compared_face=base64.encodebytes(Compared_face).decode('ascii')
    return jsonify(boxed_image=encoded_img,  
                    matched_image=Compared_face,
                    face_name=name) 


# THE FUNCTION BELOW IS NOT USED IN CURRENT VERSION OF THE APPLICATION
# This function is used to FIND A MATCH for image uploaded via CAMERA directly and IDENTIFY the person in the image
@app.route("/cameramatch",methods = ['GET','POST'])
def cammatch():


    scr = request.data
    pcr = base64.decodebytes(scr)
    
    # 'clicked_img.png' file is opened and all the byte data obtained previously is stored in it
    f=open('clicked_img.png','wb')
    f.write(pcr)
    f.close()

    #Query the database for all images using db.find()
    db_data1 = db.find()

    #Store all encodings in a list
    known_face_encodings=[data['encoded_img'] for data in db_data1]

    #Load the 'clicked_img.png' file (the image for which we wish to identify)
    unknown_image = face_recognition.load_image_file('clicked_img.png')
    print(type(unknown_image))

    #Identify the face location in the image, and create image out of it that will be modified and sent to app
    face_locations = face_recognition.face_locations(unknown_image)
    face_encodings = face_recognition.face_encodings(unknown_image, face_locations)
    pil_image = Image.fromarray(unknown_image)
    draw = ImageDraw.Draw(pil_image)
    

    for (top, right, bottom, left), face_encoding in zip(face_locations, face_encodings):
        #Compare the image encodings with the pre-existing list of encodings in database
        matches = face_recognition.compare_faces(known_face_encodings, face_encoding)

        #Setting values for the identified-name
        name = "Unknown"

        #Find the best match between current images and those in database
        face_distances = face_recognition.face_distance(known_face_encodings, face_encoding)
        best_match_index = np.argmin(face_distances)

        #If a match is found
        if matches[best_match_index]:
            #Get all the details like name, encodings etc using other fields in the database
            details= db.find({"encoded_img" : known_face_encodings[best_match_index]})
            details = details[0]
            Compared_face = zlib.decompress(details['image'])
            name = details['name']

            #The 'db.insert' line below can be uncommented if one wishes to add even the image for match into the database;
            #in that case we will have more than one images for the same person in the database,
            #which can provide better results.

            # db.insert({"encoded_img" : list(face_encoding), "name" :known_face_names[best_match_index] , "path" : './', "image":zlib.compress(known_face_pics[best_match_index])})

        #Draw a box around the face in the image
        draw.rectangle(((left, top), (right, bottom)), outline=(0, 0, 255))

        #Write the name of the person identified in the box
        text_width, text_height = draw.textsize(name)
        draw.rectangle(((left, bottom - text_height - 10), (right, bottom)), fill=(0, 0, 255), outline=(0, 0, 255))
        draw.text((left + 6, bottom - text_height - 5), name, fill=(255, 255, 255, 255))


    del draw

    #The 'pil_image.show()' line below can be uncommented if one wishes to view the image locally in the server.
    #It will automatically be displayed while the server is running

    # pil_image.show()

    #The lines below are used to send the original image(identified with name), the matched image, along with the face_name
    #Note: The image bytes are encoded into base64 before sending it back to the app.
    imgBytes=BytesIO()
    pil_image.save(imgBytes,format='PNG')
    encoded_img = base64.encodebytes(imgBytes.getvalue()).decode('ascii')
    Compared_face=base64.encodebytes(Compared_face).decode('ascii')

    return jsonify(boxed_image=encoded_img,  
                    matched_image=Compared_face,
                    face_name=name) 


#The server will run on 0.0.0.0 at port 5000 if run locally.
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
    #If the server is hosted on Heroku, uncomment the line below and comment the one above.
    # app.run(threaded=True, port=5000)
