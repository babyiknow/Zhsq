import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Platform } from 'ionic-angular';
import { Media } from '@ionic-native/media';
import { File } from '@ionic-native/file';
/**
 * Generated class for the AudioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-audio',
  templateUrl: 'audio.html',
})
export class AudioPage {
  isRecord;
  filePath;
  ri;
  recorder;
  rtimeText;
  ptimeText;
  length;
  showStop;
  constructor(private platform: Platform, public navCtrl: NavController, public navParams: NavParams, private media: Media, private file: File, public viewCtrl: ViewController) {
    this.isRecord = navParams.get("type") == "record";
    this.filePath = navParams.get("path");
    this.rtimeText = '00:00:00';
    this.ptimeText = "00:00:00/00:00:00";
    this.length = 90;
    if (this.filePath) {
      if (this.filePath.indexOf('|') > -1) {
        this.showStop = true;
      }
      else {
        this.showStop = false;

      }
    }
    if (this.isRecord) { this.startRecord(); }
    else {

      this.playRecord();
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AudioPage');
  }
  public stopRecord() {
    this.rtimeText = '00:00:00';
    clearInterval(this.ri);
    this.ri = null;
    this.recorder.stopRecord();
    let data = { 'fileName': this.filePath.substr(this.filePath.lastIndexOf('/') + 1) };
    this.recorder.release();
    this.viewCtrl.dismiss(data);
    this.filePath = null;
  }
  private playRecord() {
    if (this.filePath.indexOf("|") > -1) {
      this.recorder = null;
      this.ptimeText = "";
      return;
      //this.recorder = this.media.create(this.filePath);
    }
    else {
      //this.filePath= this.file.externalDataDirectory + this.filePath
      if (this.platform.is("android")) { this.recorder = this.media.create(this.file.externalDataDirectory + this.filePath); }
      else if (this.platform.is("ios")) {
        this.recorder = this.media.create(this.file.tempDirectory.replace(/^file:\/\//, '') + this.filePath);
      }
    }

    let duration = this.recorder.getDuration();
    this.ptimeText = "00:00:00/" + this.timeToStr(duration);
    this.recorder.play();
    var self = this;
    this.ri = setInterval(function () {
      if (duration == -1) { // 兼容无法及时获取总时长的情况
        duration = self.recorder.getDuration();
      }
      self.recorder.getCurrentPosition().then((position) => {
        if (position < 0) {
          clearInterval(self.ri);
          self.ri = null;
          self.playStop();
          return;
        }
        self.ptimeText = self.timeToStr(position) + "/" + self.timeToStr(duration);
      });

    }, 1000);

  }
  public playStop() {
    if (this.recorder) {
      this.recorder.stop();
      this.recorder.release();
    }
    this.viewCtrl.dismiss();
  }
  ///开始录音
  private startRecord() {
    if (!this.filePath) {
      if (this.platform.is("android"))
        this.filePath = this.file.externalDataDirectory + this.createFileName() + ".mp3";
      else if (this.platform.is("ios")) {
        this.filePath = this.file.tempDirectory+ this.createFileName() + ".m4a";
      }
    }
    this.recorder = this.media.create(this.filePath);
    this.recorder.startRecord();
    let t = 0;
    var self = this;
    this.ri = setInterval(function () {
      t++;
      self.rtimeText = self.timeToStr(t);
    }, 1000);
  }
  private createFileName(): string {
    const Dates = new Date();
    const year: number = Dates.getFullYear();
    const month: any = (Dates.getMonth() + 1) < 10 ? '0' + (Dates.getMonth() + 1) : (Dates.getMonth() + 1);
    const day: any = Dates.getDate() < 10 ? '0' + Dates.getDate() : Dates.getDate();
    const hour: any = Dates.getHours() < 10 ? '0' + Dates.getHours() : Dates.getHours();
    const minute: any = Dates.getMinutes() < 10 ? '0' + Dates.getMinutes() : Dates.getMinutes();
    const second: any = Dates.getSeconds() < 10 ? '0' + Dates.getSeconds() : Dates.getSeconds();
    let dateStr = year + "" + month + "" + day + "" + hour + "" + minute + "" + second;

    return dateStr
  }

  private timeToStr(ts: number): string {
    var h = parseInt(String(ts / 3600));
    var m = parseInt(String((ts % 3600) / 60));
    var s = parseInt(String(ts % 60));
    return (this.ultZeroize(h) + ":" + this.ultZeroize(m) + ":" + this.ultZeroize(s));
  }
  private ultZeroize(v: number): string {
    let s: string = "";
    if (v < 10) {
      s = "0" + v;
    }
    else {
      s = v + "";
    }
    return s;
  }
}
