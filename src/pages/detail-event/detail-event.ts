import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController, ModalController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../../app/app.config';
import { DealEventPage } from "../deal-event/deal-event"
import { AudioPage } from "../audio/audio"
import { PicturePage } from "../picture/picture"
import { DomSanitizer } from '@angular/platform-browser';
/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name:"detailevent",
  segment:"detail:id"
})
@Component({
  selector: 'page-detail-event',
  templateUrl: 'detail-event.html',
})
export class DetailEventPage {
  event;
  appUrl;
  eventResultList;
  hasPermission;
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient, private domSanitizer: DomSanitizer,
    private toastCtrl: ToastController, private loadCtrl: LoadingController, private modalCtrl: ModalController) {
    this.eventResultList = [];
    this.event = this.navParams.get("event");
    this.appUrl = AppConfig.appUrl;
    this.hasPermission= this.navParams.get("hasPermission");
  }
  ionViewWillEnter() {
    this.getEventResultList();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }
  private getEventResultList() {
    this.http.post(AppConfig.appUrl + "/Dcqtech.App/App/EventResultList", { eventId: this.event["Id"] }, {}).subscribe(res => {
      if (res["Success"]) {
        this.eventResultList = res["Response"].reverse();
      }
    }, err => {

    })
  }
  public playAudio(url) {
    let model = this.modalCtrl.create(AudioPage, { type: "play", path: url });
    model.present();
  }
  public showImg(urls) {
    // let model = this.modalCtrl.create(PicturePage, { urlNames: urls });
    // model.present();
   this.navCtrl.push(PicturePage, { urlNames: urls });
  }
  public assembleHTML(eventResult: any) {
    let html = '[' + eventResult.Type + ']' + eventResult.Remark;
    return this.domSanitizer.bypassSecurityTrustHtml(html);
  }
  /**
   * dealWith(eventResult)
   */
  public dealWith() {

    if (this.event["Type"] === '上报' || this.event["Type"] === '待接手' || this.event["Type"] === '驳回') {
      let loading = this.loadCtrl.create({
        spinner: 'ios',
        content: '事件领取中，请稍候...',
        dismissOnPageChange: false
      });
      loading.present();
      var jsondata = {
        eventId: this.event["Id"],
        HType: 2003,
        NextUser_ID: 0,
        Detail: "",
        NeedAuditing: false
      };
      this.http.post(AppConfig.appUrl + "/Dcqtech.Affairs/Admin/EventResultsAction", jsondata, {}).subscribe(res => {
        loading.dismiss();
        let toast = this.toastCtrl.create({
          message: "事件领取成功",
          duration:1000
        });
        if (!res["Status"]) {
          toast.setMessage(res["Message"]);
          toast.present();
          return;
        }
        toast.present();
        //this.navCtrl.pop();
        this.event["Type"] ="处理中";
        this.navCtrl.push(DetailEventPage, { event: this.event });
      }, err => {
        let toast = this.toastCtrl.create({
          message: err.message,
          duration: 1000
        });
        toast.present();
      });
    }
    else {
      this.navCtrl.push(DealEventPage, { EventId: this.event.Id });
    }
  }
}
