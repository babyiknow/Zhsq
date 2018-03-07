import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, ModalController, ToastController, LoadingController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../../app/app.config';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Geolocation } from '@ionic-native/geolocation';
import { Platform } from 'ionic-angular';
import { AudioPage } from '../audio/audio';
/**
 * Generated class for the PresentEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name:"presentevent",
  segment:"presentevent"
})
@Component({
  selector: 'page-present-event',
  templateUrl: 'present-event.html',
})
export class PresentEventPage {
  villages;
  grids;
  eventTypes;
  villageSeleted:any;
  gridSeleted:any;
  eventTypeSeleted:any;
  pictures;
  address;
  explain;
  audios;
  position;
  x;
  y;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, private camera: Camera, public actionSheetCtrl: ActionSheetController,
    private transfer: FileTransfer, private file: File, private geolocation: Geolocation, private platform: Platform, public modalCtrl: ModalController,
    private toastCtrl: ToastController, private loadCtrl: LoadingController) {
    this.audios = [];
    this.pictures = [];
    this.explain = '';
   
    this.platform.ready().then(() => {
      this.getPosition();
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PresentEventPage');

  }
  ngOnInit() {
    this.getVillage();
    this.getEventType();

  }
  getPosition() {
    this.geolocation.getCurrentPosition({ timeout: 5000, enableHighAccuracy: true }).then(pos => {
      let currentLon = pos.coords.longitude;
      let currentLat = pos.coords.latitude;
      this.x=currentLon;
      this.y=currentLat;
      this.position=String(this.x)+";"+String(this.y);
      this.http.post(AppConfig.appUrl + "/Dcqtech.Affairs/Content/GetGeoByPoint", {
        geoType: (2 | 4),
        x: currentLon,
        y: currentLat
      }, {}).subscribe((data: any) => {
        console.log(data);
        if (data.Status) {
          if (data.Obj.village.length > 0) {
            this.villageSeleted =  data.Obj.village[0].ID;//{ value: data.Obj.village[0].ID };
          }
          if (data.Obj.grid.length > 0) {
            this.gridSeleted = data.Obj.grid[0].ID;// { value: data.Obj.grid[0].ID  };
          }
        }

      }, err => {
        this.villageSeleted = { value: 3 };
        this.gridSeleted = { value: 2 };
        alert("错误");
      });
      let url = "http://api.map.baidu.com/geocoder/v2/?location=" + currentLat + "," + currentLon + "&output=json&coordtype=wgs84ll&ak=85ebb7ccfcff99c21498182334c504c5";
      this.http.get(url).subscribe((res: any) => {
        // alert(JSON.stringify(res));
        this.address = res.result.formatted_address + res.result.sematic_description;
        //alert(this.address);
      }, err => {
        alert(JSON.stringify(err));
      })
    }).catch(err => {
      this.x=106.499486;
      this.y=29.547141;
      this.position=String(this.x)+";"+String(this.y);
      this.http.post(AppConfig.appUrl + "/Dcqtech.Affairs/Content/GetGeoByPoint", {
        geoType: (2 | 4),
        x: this.x,
        y: this.y
      }, {}).subscribe((data: any) => {
        console.log(data);
        if (data.Status) {
          if (data.Obj.village.length > 0) {
            this.villageSeleted = data.Obj.village[0].ID;//{ value: data.Obj.village[0].ID,text: data.Obj.village[0].VillageName };
          }
          if (data.Obj.grid.length > 0) {
            this.gridSeleted = data.Obj.grid[0].ID; //{ value: data.Obj.grid[0].ID,text: data.Obj.grid[0].GridName  };
          }
        }

      }, err => {
        this.villageSeleted = { value: 3 };
        this.gridSeleted = { value: 2 };
        alert("错误");
      });
    });
  }
  getVillage() {
    this.http.post(AppConfig.appUrl + "/Dcqtech.App/App/GetGeoByCommunityID", {
      geoType: (2 | 4),
      communityId: 0
    }, {}).subscribe((data: Response) => {
      //this.events=data;     
      if (data["Success"]) {
        this.villages = data["Response"]["village"];
        this.grids = data["Response"]["grid"];

        
      }
    }, err => {
      alert("错误");
    })
  }
  getEventType() {
    this.http.post(AppConfig.appUrl + "/Dcqtech.App/App/EventItemTypeListJson", {}, {}).subscribe((data: Response) => {
      if (data["Success"]) {
        this.eventTypes = data["Response"];
      }
    }, err => {
      alert("错误");
    })
  }
  public postEvent(event) {
    event.stopPropagation();
    let params = {
      address: this.address,
      eventItemType_ID: this.eventTypeSeleted,
      grid_id: this.gridSeleted,
      info: this.explain,
      village_id: this.villageSeleted,
      x: this.x,
      y: this.y,
      source: "App"
    }
    if (!params.grid_id || params.grid_id == "") {
      this.toastCtrl.create({
        message: "请先选择事件所属网格",
        duration: 1500,
        position: "top"
      }).present();
      return;
    }
    if (!params.eventItemType_ID || params.eventItemType_ID == "") {
      this.toastCtrl.create({
        message: "请先选择事件类型",
        duration: 1500,
        position: "top"
      }).present();
      return;
    }
    if (!params.x || params.x == "" || !params.y || params.y == "") {
      this.toastCtrl.create({
        message: "位置信息获取失败,不能提交事件",
        duration: 1500,
        position: "top"
      }).present();
      return;
    }
    let loading = this.loadCtrl.create({
      spinner: 'ios',
      content: '数据提交中，请稍候...',
      dismissOnPageChange: false
    });
    loading.present();
    this.http.post(AppConfig.appUrl + "/Dcqtech.App/App/PostEvent", { param: JSON.stringify(params) }, {}).subscribe((data: any) => {
      loading.dismiss();
      if (data["Success"]) {
        this.pictures.forEach(element => {
          this.uploadFile(element, { param: JSON.stringify({ Id: data["Response"]["Id"] }) });
        });
        this.audios.forEach(element => {
          if (this.platform.is("android"))
            this.uploadFile(this.file.externalDataDirectory + element, { param: JSON.stringify({ Id: data["Response"]["Id"] }) });
          else if (this.platform.is("ios"))
            this.uploadFile(this.file.tempDirectory + element, { param: JSON.stringify({ Id: data["Response"]["Id"] }) });
        });
        let toast = this.toastCtrl.create({
          message: "事件上报成功",
          duration: 1500
        });
        toast.present();
        this.navCtrl.pop();
      }
      else{
         this.toastCtrl.create({
          message: data["Message"],
          duration: 1500
        }).present();
      }
    }, err => {
      alert("上报事件出错");
    });
  }
  public showActionSheet() {

    let actionSheet = this.actionSheetCtrl.create({
      title: '选择照片',
      buttons: [
        {
          text: '拍照',
          handler: () => {
            let options: CameraOptions = {
              quality: 50,
              destinationType: this.camera.DestinationType.FILE_URI,
              encodingType: this.camera.EncodingType.JPEG,
              mediaType: this.camera.MediaType.PICTURE
            }
            options.sourceType = this.camera.PictureSourceType.CAMERA;
            this.camera.getPicture(options).then((imageData) => {
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
              quality:50,
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
    let options: FileUploadOptions = {
      fileKey: 'file',
      fileName: fileUrl.substr(fileUrl.lastIndexOf('/') + 1),
      httpMethod: 'post',
      params: params
    }
    const fileTransferObject: FileTransferObject = this.transfer.create();
    fileTransferObject.upload(fileUrl, AppConfig.appUrl + "/Dcqtech.App/App/PostFiles", options)
      .then((data) => {
        // success
        let toast = this.toastCtrl.create({
          message: "文件上传成功",
          duration: 500
        });
        toast.present();
      }, (err) => {
        // error
        let toast = this.toastCtrl.create({
          message: "文件上传失败",
          duration: 500
        });
        toast.present();
      })
  }
  public deleteAudio(event, url) {
    event.stopPropagation();
    let index = this.audios.indexOf(url);
    if (index > -1) {
      this.audios.splice(index, 1);
    }
  }
  public delImg(picture) {
    let index = this.pictures.indexOf(picture);
    if (index > -1) {
      this.pictures.splice(index, 1);
    }
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
    if (!url) {
      alert("测试");
      return;
    }
    let model = this.modalCtrl.create(AudioPage, { type: "play", path: url });
    model.present();
  }
}
