import { Component } from '@angular/core';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse, HttpBackend } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import { File } from '@ionic-native/file/ngx'
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs-upload.page.html',
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

export class Tabs_upload {

  selectedFile: File                      // The file selected for matching a face
  namefield: string
  base64Image: any                        // The image with box around the face sent as a response by the server
  photo: SafeResourceUrl              
  hide_home: boolean
  clickedImage: any                       // The clicked image using camera
  isImageSaved: boolean
  my_ip: string                           // The ip address of the backend server
  cardImageBase64: string;                // The selected image converted to base64 JPEG image format 
  clicked_image: string
  isSuccess: boolean                      // Variable specifying whether the image is uploaded successfully or not
  itr: number = 0
  head: string = 'data:image/jpg;base64,' // Extra header for converting into JPEG format


    /* This part of code converts the image in base64 string format to base64 JPEG image */

  constructor(private sanitizer: DomSanitizer, private http: HttpClient, private file: File, private alertController: AlertController) {
    this.hide_home = true
    this.isSuccess = false
    

    // this.my_ip = 'http://0.0.0.0:5000'
    // this.my_ip = 'http://bd04a536.ngrok.io'


    /* Change this line to set the IP address of the backend server */
    this.my_ip = 'http://serverbysahil.herokuapp.com'
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


  /*
  Function used to capture an image through device's camera
  Called when "Capture image" button is clicked
  The captured image is strored in the variable "this.cardImageBase64"
  */
  async takePicture() {
    this.isSuccess = false
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
    this.clickedImage = image.base64String
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
  async onFileChanged(event) {
    this.hide_home = false
    this.isSuccess = false
    this.selectedFile = event.target.files[0]
    console.log(this.selectedFile)
    this.cardImageBase64 = "wait"
    
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

    this.delay(1000)      // waits for the image to load
  }

  /* This was used in an earlier version to input the name of the person. NOT USED IN CURRENT VERSION */
  onNameChanged(searchValue: string): void {
    this.namefield = searchValue
    console.log(searchValue);
  }


  /* This function uploads the image to the backend server using the corresponding routes for image clicked by camera and selected as file */
  onUpload(name: string) {
    this.hide_home = true

    /* Uploads an image clicked by camera along with the name of the person to the backend server using http POST request */
    if (!this.selectedFile) {
      this.http.post<any>(this.my_ip + '/cameraupload/' + name, this.clickedImage).subscribe(() => { this.isSuccess = true })
    }

    /* Uploads an image selected from a file along with the name of the person to the backend server using http POST request */
    else {
      this.http.post<any>(this.my_ip + '/imageupload/' + name, this.selectedFile).subscribe(() => { this.isSuccess = true })
    }
  }

  /*
  This function is used to create an alert box that asks the user to enter his name
  Called when "Confirm" button is clicked after selecting an image to upload
  */
  async presentAlertPrompt() {
    this.isSuccess = false
    const alert = await this.alertController.create({
      header: 'Enter name!',
      animated: true,
      inputs: [
        {
          name: 'Name',
          type: 'text',
          placeholder: 'Name'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            this.isImageSaved = false
            this.onUpload(data.Name)
          }
        }
      ]
    });

    await alert.present();
  }

  /* This function is used to go back to the "Upload an image" page to select another image to upload */
  goBack() {
    window.location.reload()
  }
}
