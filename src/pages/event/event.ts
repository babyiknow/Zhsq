import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { HttpClient} from '@angular/common/http';
import { Camera, CameraOptions } from '@ionic-native/camera';
import {MyEventPage} from '../my-event/my-event';
import {PresentEventPage} from '../present-event/present-event';
import {EventListPage} from '../event-list/event-list';
@Component({
  selector: 'page-event',
  templateUrl: 'event.html'
})
export class EventPage {
  departments: Array<Object> = [];
  constructor(public navCtrl: NavController,private camera: Camera, public actionSheetCtrl: ActionSheetController,public http:HttpClient) {

  }
  public goto(type:string){
     if(type=="presentEvent"){
       this.navCtrl.push(PresentEventPage);
     }
     else if(type=="myEvent"){
      this.navCtrl.push(MyEventPage);
     }
     else{
      this.navCtrl.push(EventListPage);
     }
  }
  public getPicture(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      //let base64Image = 'data:image/jpeg;base64,' + imageData;
     }, (err) => {
      // Handle error
     });
     
  }
  clickme(event) {
    this.http.post("http://192.168.1.105:43911/Enterprise/GetGridJson",JSON.stringify({
      limit:10,
      offset:0
    })).subscribe(data=>{
    console.log(data);

     })
     
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Modify your album',
      buttons: [
        {
          text: 'Destructive',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },
        {
          text: 'Archive',
          handler: () => {
            console.log('Archive clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });

    actionSheet.present();
  }
}
