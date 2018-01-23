import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, ModalController, ToastController,LoadingController } from 'ionic-angular';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../../app/app.config';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { AudioPage } from '../audio/audio';
//import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker';
/**
 * Generated class for the DealEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name:"dealevent",
  segment:"deal:EventId"
})
@Component({
  selector: 'page-deal-event',
  templateUrl: 'deal-event.html',
})
export class DealEventPage {
  pictures;
  audios;
  eventId;
  form;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, private camera: Camera, public actionSheetCtrl: ActionSheetController,
    private transfer: FileTransfer, private file: File, public modalCtrl: ModalController,
    private toastCtrl: ToastController,private loadCtrl:LoadingController
  ) {

    this.pictures = [];
    this.audios = [];
    this.eventId = navParams.get("EventId");
    this.form = new FormGroup({
      "handleType": new FormControl({ value: '2004', disabled: false }),
      "detail": new FormControl({ value: "", disabled: false })
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyEventPage');
  }
  public deleteAudio(event,url){
    event.stopPropagation();
    let index=this.audios.indexOf(url);
    if(index>-1){
      this.audios.splice(index,1);
    }
  }
  public delImg(picture){
    let index=this.pictures.indexOf(picture);
    if(index>-1){
      this.pictures.splice(index,1);
    }
  }
  public showActionSheet() {

    let actionSheet = this.actionSheetCtrl.create({
      title: '选择照片',
      buttons: [
        {
          text: '拍照',
          handler: () => {
            let options: CameraOptions = {
              quality: 80,
              destinationType: this.camera.DestinationType.FILE_URI,
              encodingType: this.camera.EncodingType.JPEG,
              mediaType: this.camera.MediaType.PICTURE,
              sourceType: this.camera.PictureSourceType.CAMERA
            }
            this.camera.getPicture(options).then((imageData) => {
              //this.pictures.push(imageData);
              this.pictures.splice(0, 0, imageData);
            }, (err) => {
              // Handle error
            });
          }
        },
        {
          text: '相册选取',
          handler: () => {
            let options: CameraOptions = {
              quality: 80,
              destinationType: this.camera.DestinationType.DATA_URL,
              encodingType: this.camera.EncodingType.JPEG,
              mediaType: this.camera.MediaType.PICTURE,
              sourceType: 2
            }
            this.camera.getPicture(options).then((imageData) => {
              //alert(imageData);
              let base64Image = 'data:image/jpeg;base64,' + imageData;
              this.pictures.splice(0, 0, base64Image);
            }, (err) => {

            });
          }
        },
        {
          text: '取消',
          handler: () => {

          }
        }
      ]
    });

    actionSheet.present();
  }
  private uploadFile(fileUrl: string, params) {
    let mimeType = "image/jpeg"
    if (fileUrl.indexOf(".mp3") > -1) {
      mimeType = "audio/mpeg"
    }
    let options: FileUploadOptions = {
      fileKey: 'file',
      fileName: fileUrl.substr(fileUrl.lastIndexOf('/') + 1),
      httpMethod: 'post',
      params: params,
      mimeType: mimeType
    }
    const fileTransferObject: FileTransferObject = this.transfer.create();
    fileTransferObject.upload(fileUrl, encodeURI(AppConfig.appUrl + "/Dcqtech.App/App/PostFiles"), options)
      .then((data) => {
        // success
        //alert("321321");
        let toast = this.toastCtrl.create({
          message: "文件上传成功",
          duration: 500
        });
        toast.present();
      }).catch(err => {
        alert(JSON.stringify(err));
        this.toastCtrl.create({
          message: err.message,
          duration: 500
        }).present();
      });

  }

  public showAudioRecord() {
    let model = this.modalCtrl.create(AudioPage, { type: "record" });

    model.onDidDismiss(data => {
      if (data && data["fileName"])
        this.audios.splice(0, 0, data["fileName"]);
    });
    model.present();
  }
  public playRecord(url) {
    let model = this.modalCtrl.create(AudioPage, { type: "play", path: url });
    model.present();
  }
  public doSubmit(event) {
    //alert(JSON.stringify(this.form.value));
    if (!this.form.value["detail"] || this.form.value["detail"] == "") {
      let toast = this.toastCtrl.create({
        message: "请先填写说明",
        duration: 1000
      });
      toast.present();
      return;
    }
    let loading=this.loadCtrl.create({
      spinner: 'ios',
      content: '数据提交中，请稍候...',
      dismissOnPageChange: false
     });
     loading.present();
    var jsondata = {
      eventId: this.eventId,
      HType: this.form.value["handleType"],
      NextUser_ID: 0,
      Detail: this.form.value["detail"],
      NeedAuditing: false
    };
    this.http.post(AppConfig.appUrl + "/Dcqtech.Affairs/Admin/EventResultsAction", jsondata, {}).subscribe(res => {
      loading.dismiss();
      let toast = this.toastCtrl.create({
        message: "事件处理成功",
        duration: 1000
      });
      if (!res["Status"]) {
        toast.setMessage(res["Msg"]);
        toast.present();
        return;
      }
      this.pictures.forEach(element => {
        this.uploadFile(element, { param: JSON.stringify({ Id: res["Obj"]["Id"] }) });
      });
      this.audios.forEach(element => {
        this.uploadFile(this.file.externalDataDirectory + element, { param: JSON.stringify({ Id: res["Obj"]["Id"] }) });
      })
      toast.setMessage("事件处理成功");
      toast.present();
      setTimeout(() => {
        this.navCtrl.pop();
      }, 1000); //刷新
    }, err => {

    })
  }
}
