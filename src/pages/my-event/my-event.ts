import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../../app/app.config';
import { DetailEventPage } from '../detail-event/detail-event';
import { DomSanitizer } from '@angular/platform-browser';
/**
 * Generated class for the MyEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  segment: 'myevent',
  name:"myevent",
 // priority: 'high'
})
@Component({
  selector: 'page-my-event',
  templateUrl: 'my-event.html',
})
export class MyEventPage {
  events: Array<object>;
  searchText;
  queryParam = {
    Search: '',
    Limit: 10,
    Offset: 0
  };
  hasPermission:boolean=true;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, public actionSheetCtrl: ActionSheetController,
  private dom:DomSanitizer) {
  
  }
  ionViewWillEnter(){
    this.queryParam.Offset = 0;
    this.loadEvent()
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MyEventPage');
  }
  public loadEvent(){

    this.http.post(AppConfig.appUrl + "/Dcqtech.App/App/MyEventList", this.queryParam, {}).subscribe((data: Response) => {
      //this.events=data;     
      if (data["Success"]) {
        this.events = data["Response"]["rows"];   
        this.queryParam.Offset += data["Response"]["rows"].length;
        this.hasPermission=data["Response"]["HasPermission"];
      }
    }, err => {
      alert("错误");
    })
  }
  public assembleHTML(event:any) {
    let html= (event.HUserID||event.PUserID)+":"+ event.LatestResultDetail;
    return this.dom.bypassSecurityTrustHtml(html);
  }
  /**
   * doInfinite
   */
  public doInfinite(infiniteScroll) {
    this.http.post(AppConfig.appUrl + "/Dcqtech.App/App/MyEventList", this.queryParam, {}).subscribe((data: Response) => {
      //this.events=data;     
      if (data["Success"]) {
        this.queryParam.Offset += data["Response"]["rows"].length;
        data["Response"]["rows"].forEach(element => {
          this.events.push(element);
        });
        if (this.events.length >= data["Response"]["total"]) {
          infiniteScroll.enable(false);
        }
      }
      infiniteScroll.complete();
    }, err => {
      alert("错误");
    })
  }
  public dealEvent(event) {
    this.navCtrl.push(DetailEventPage, { event: event,hasPermission:this.hasPermission });
  }
}
