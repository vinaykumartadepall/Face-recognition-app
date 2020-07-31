import { Component } from '@angular/core';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse, HttpBackend } from '@angular/common/http';
import { Observable, Observer, range } from 'rxjs';
import { File } from '@ionic-native/file/ngx';
import { AlertController } from '@ionic/angular';
import { Capacitor, FilesystemDirectory } from '@capacitor/core';
const { FileTransfer, Filesystem } = Plugins

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs-match.page.html',
  styleUrls: ['tabs.page.scss']
})

/*
Developed by:
SAHIL BHATT, VINAY KUMAR TADEPALLI, AMOGH TIWARI, UMESH CHANDRA POLA 
@2020

This code explains the functions used to choose an image for performing face recognition as well as the communication 
mechanism between the app and server.
Installation of the libraries above via 'npm install' is necessary for running the app 
---------------------------------------------------------------------------------------------------- 
*/


export class Tabs_match {

  // constructor() {}
  selectedFile: File                         // The file selected for matching a face
  namefield: string                          
  base64Image: any                           // The image with box around the face sent as a response by the server
  photo: SafeResourceUrl                     
  hide_home: boolean                          
  clickedImage: any                          // The clicked image using camera
  isImageSaved: boolean                
  my_ip: string                              // The ip address of the backend server
  cardImageBase64: string;                   // The selected image converted to base64 JPEG image format 
  isMatched: boolean            
  faceName: string = "__________"            // Name of the person identified
  itr: number = 0                           
  head: string = 'data:image/jpg;base64,'    // Extra header for converting into JPEG format
  clicked_image: string             
  matched_image: string                      // The image used for match which is sent as a response by the server
  tempFile: File                
  show_matched: boolean = false



  constructor(private sanitizer: DomSanitizer, private http: HttpClient, private file: File) {
    this.hide_home = true
    this.isMatched = false

    // this.my_ip = 'http://0.0.0.0:5000'
    // this.my_ip = 'http://bd04a536.ngrok.io'


    /* Change this line to set the IP address of the backend server */
    this.my_ip = 'http://serverbysahil.herokuapp.com'

  }

  /* Function called when the "Show matched" button is clicked after fining a match */
  show_matched_face() {
    this.show_matched=true
  }

  /* Function called when the "Show Original" button is clicked after fining a match */
  unshow_matched_face() {
    this.show_matched=false
  }

  /* Function called to get the name of the identified person for displaying in the app */
  get_name() {
    return this.faceName
  }


  /* Function used to read a file from the device */
  getFileReader(): FileReader {
    const fileReader = new FileReader();
    const zoneOriginalInstance = (fileReader as any)["__zone_symbol__originalInstance"];
    return zoneOriginalInstance || fileReader;
  }

  
  /* Function to set a delay for specified time (in milliseconds) */
  async delay(ms: number) {
    await new Promise(resolve => setTimeout(() => resolve(), ms)).then(() => console.log("fired"));
  }

  
  b64toBlob(b64Data, contentType) {
    contentType = contentType || '';
    var sliceSize = 512;
    var byteCharacters = atob(b64Data);
    var byteArrays = [];

    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      var slice = byteCharacters.slice(offset, offset + sliceSize);

      var byteNumbers = new Array(slice.length);
      for (var i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      var byteArray = new Uint8Array(byteNumbers);

      byteArrays.push(byteArray);
    }

    var blob = new Blob(byteArrays, {type: contentType});
    return blob;
  }

  
  /*
  Function used to capture an image through device's camera
  Called when "Capture image" button is clicked
  The captured image is strored in the variable "this.cardImageBase64"
  */
  async takePicture() {
    this.hide_home = false

    /* Method to capture an image through camera */
    const image = await Plugins.Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera
    });

    
    /* This part of code converts the image in base64 string format to base64 JPEG image */
    this.cardImageBase64 = image.base64String
    this.clickedImage = this.b64toBlob(image.base64String,'image/png')
    this.itr = 0
    while (this.itr < this.head.length) {
      if (this.cardImageBase64[this.itr] != this.head[this.itr]) {
        this.cardImageBase64 = this.head + this.cardImageBase64
        break
      }
    }

    this.isImageSaved = true
  }


  
  /*
  This function is used to select a file and read image from the selected file 
  Called when "Upolad File" button is clicked
  The selected image is strored in the variable "this.cardImageBase64"
  */
  onFileChanged(event) {
    this.hide_home = false
    this.selectedFile = event.target.files[0]

    /* this part of cade selects a file and reads the image in the file */ 
    let reader = this.getFileReader();
    reader.onload = (e: any) => {
      const image = new Image();
      image.src = e.target.result;
      image.onload = rs => {
        const imgBase64Path = e.target.result;
        this.cardImageBase64 = imgBase64Path;
        console.log(this.cardImageBase64)
        this.isImageSaved = true;
      };
    };
    reader.readAsDataURL(event.target.files[0]);
    this.delay(1000);
  }

  onNameChanged(searchValue: string): void {
    this.namefield = searchValue
    console.log(searchValue);
  }


  /* 
  This function finds a match for the image using the corresponding routes for image clicked by camera and selected as file
  Both requests send back the selected image with a box around the name specifying the person's name and the image it is matched to along with the name of the person
  */
  matchFace() {

    /* 
    Matches an image clicked by camera along with the name of the person to the backend server using http POST request 
    Response contains the following:
    1) The original image sent for match with a boox around the face 
    2) The image with which it is matched with
    3) Name of the person identified
    */
    if (!this.selectedFile) {
      this.http.post<any>(this.my_ip + '/imagematch', this.clickedImage).subscribe(
        (res) => {
          // this.getImage();
          console.log("res")
          console.log(res)
          this.base64Image = 'data:image/jpg;base64,' + res['boxed_image'];
          this.faceName = res['face_name']
          this.matched_image = 'data:image/jpg;base64,' + res['matched_image']
          // this.faceName = res['face_name']
          // console.log(this.base64Image)
        },
        (err) => {
          console.log("err",err)
          this.faceName = "Unknown"
          this.base64Image = this.cardImageBase64
        }
      )
    }

    /* 
    Matches an image selected from a file along with the name of the person to the backend server using http POST request 
    Response contains the following :  
    1) The original image sent for match with a boox around the face 
    2) The image with which it is matched with
    3) Name of the person identified
    */
    else {
      this.http.post<any>(this.my_ip + '/imagematch', this.selectedFile).subscribe(
        (res) => {
          // this.getImage();
          this.base64Image = 'data:image/jpg;base64,' + res['boxed_image'];
          this.faceName = res['face_name']
          this.matched_image = 'data:image/jpg;base64,' + res['matched_image']
          console.log(this.base64Image)
          // console.log(res['matched_image'])
        },
        (err) => {
          console.log("err",err)
          this.faceName = "Unknown"
          this.base64Image = this.cardImageBase64
        }
      )
    }
  }


  /* This function is called when The "confirm" button is clicked after selecting an image to find match */
  confirmed() {
    // this.hide_home=true
    this.isMatched = true
    this.isImageSaved = false
    this.matchFace()
  }


  /* This function is used to go back to the "Upload an image" page to select another image to upload */
  goBack() {
    window.location.reload()
  }
}
