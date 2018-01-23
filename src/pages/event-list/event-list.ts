import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../../app/app.config';
import { DetailEventPage } from '../detail-event/detail-event'
import { DomSanitizer } from '@angular/platform-browser';
/**
 * Generated class for the EventListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-event-list',
  templateUrl: 'event-list.html',
})
export class EventListPage {
  events: Array<object>;
  searchText;
  queryParam = {
    Search: '',
    Limit: 10,
    Offset: 0
  };
  total:0;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, public actionSheetCtrl: ActionSheetController,
  private dom:DomSanitizer) {
   
  }
  ionViewWillEnter(){
    this.queryParam.Offset = 0;
    this.http.post(AppConfig.appUrl + "/Dcqtech.App/App/EventList", this.queryParam, {}).subscribe((data: Response) => {   
      debugger;
      if (data["Success"]) {
        this.events = data["Response"]["rows"];
        this.queryParam.Offset += data["Response"]["rows"].length;
      }
      else{
        alert(data["Message"]); 
      }
    }, err => {
      alert("错误");
    })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad EventListPage');
  }
  public assembleHTML(event:any) {
    let html= (event.HUserID||event.PUserID)+":"+ event.LatestResultDetail;
     return this.dom.bypassSecurityTrustHtml(html);
   }
  /**
   * doInfinite
   */
  public doInfinite(infiniteScroll) {
    this.http.post(AppConfig.appUrl + "/Dcqtech.App/App/EventList", this.queryParam, {}).subscribe((data: Response) => {
      //this.events=data;     
      if (data["Success"]) {
       
        data["Response"]["rows"].forEach(element => {
          this.events.push(element);
        });
        this.queryParam.Offset += data["Response"]["rows"].length;
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
    this.navCtrl.push(DetailEventPage, { event: event });
  }
}
