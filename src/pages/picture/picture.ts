import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppConfig } from '../../app/app.config';
/**
 * Generated class for the PicturePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-picture',
  templateUrl: 'picture.html',
})
export class PicturePage  {
  pictures;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pictures=[];
    let urlNames=navParams.get("urlNames");
    this.load(urlNames)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PicturePage');
  }
  private load(urlNames){
    let urls=urlNames.split(',');
    urls.forEach(element => {
      if(element.indexOf(".mp3")<0){
        this.pictures.push(AppConfig.appUrl+'/User/Affairs/WorkFiles/Get/'+element.split('/').join('|'));
      } 
    });
  }
}
