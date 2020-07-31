import { Component } from '@angular/core';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable,Observer } from 'rxjs';


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs-homePage.page.html',
  styleUrls: ['tabs.page.scss']
})

export class Tabs_homePage {
    base64Image : any
    photo: SafeResourceUrl
  
    constructor() {}
    
}