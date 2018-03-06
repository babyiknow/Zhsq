import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, ToastController } from 'ionic-angular';
import { isLoaded, loadScript, loadModules } from 'esri-loader/dist/esm/esri-loader';
import { Geolocation } from '@ionic-native/geolocation';
import { Platform } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../../app/app.config';
import { BackgroundGeolocation, BackgroundGeolocationConfig, BackgroundGeolocationResponse } from '@ionic-native/background-geolocation';
import { BackgroundMode } from '@ionic-native/background-mode';
import { BatteryStatus,BatteryStatusResponse } from '@ionic-native/battery-status';
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  map;
  imgSrc;
  isCheck;
  lastX;
  lastY;
  lastDateTime;
  watchId;
  trueDistance;
  truePt: any;
  truePts: any;
  postId;
  postHeartId;
  PI;
  batterysubscription;
  constructor(public navCtrl: NavController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public platform: Platform,
    public geolocation: Geolocation,
    public http: HttpClient,
    public backgroundGeolocation: BackgroundGeolocation,
    public backgroundMode: BackgroundMode,
    private batteryStatus: BatteryStatus
  ) {
    platform.ready().then(() => {

      this.PI = 3.14159265358979324;
      this.imgSrc = "assets/imgs/startCheck.png";
      this.isCheck = false;
      this.lastX = 0;
      this.lastY = 0;
      this.trueDistance = 0;
      this.truePt = {
        X: 0,
        Y: 0
      };
      this.truePts = [];
      this.configureBackgroundGeoLocation();  
      this.batterysubscription = this.batteryStatus.onChange().subscribe(
        (status: BatteryStatusResponse) => {
          //console.log(status.level, status.isPlugged);
          this.backgroundGeolocation.start();
          clearInterval(this.postId);
          this.postId = null;
          clearInterval(this.postHeartId);
          this.postHeartId = null;
          this.post();
        }
       );
      // platform.pause.subscribe(() => {
      //   if (this.isCheck) {
      //     this.watchId.unsubscribe();
      //     this.watchId = null;
      //     this.backgroundGeolocation.start();
      //   }
      // });
      // platform.resume.subscribe(() => {
      //   if (this.isCheck) {
      //     this.backgroundGeolocation.stop();
      //     this.watchId = this.geolocation.watchPosition({ timeout: 5000, enableHighAccuracy: true }).subscribe(position => {
      //       this.getPositionSuccess(position.coords);
      //     }, err => {
      //       alert(err.message)
      //     });
      //   }

      // })
      this.loadEsri();
     
    });
  }
  private configureBackgroundGeoLocation() {
    const config: BackgroundGeolocationConfig = {
      desiredAccuracy: 10,
      stationaryRadius: 20,
      distanceFilter: 30,
      interval: 1000,
      fastestInterval: 2000,
      notificationTitle: '智慧石油路', // <-- android only, customize the title of the notification
      notificationText: '巡检中', // <-- android only, customize the text of the notification
      activityType: 'AutomotiveNavigation',
      //debug: true, // <-- enable this hear sounds for background-geolocation life-cycle.
      stopOnTerminate: false // <-- enable this to clear background location settings when the app terminates
    };
    this.backgroundGeolocation.configure(config)
      .subscribe((location: BackgroundGeolocationResponse) => {
        this.getPositionSuccess(location);
        if (this.platform.is("ios")) {
          this.backgroundGeolocation.finish(); // FOR IOS ONLY
        }
      }, err => { alert(err.message) });
  }
  public position() {
    this.geolocation.getCurrentPosition({ timeout: 5000, enableHighAccuracy: true }).then(pos => {
      loadModules(["esri/geometry/Point", "esri/symbols/PictureMarkerSymbol", "esri/graphic"]).then(([Point, PictureMarkerSymbol, Graphic]) => {
        let point = new Point(pos.coords.longitude, pos.coords.latitude, this.map.spatialReference);
        let symbol = new PictureMarkerSymbol('assets/imgs/layer11.png', 16, 24);
        let graphic = new Graphic(point, symbol);
        let postionLayer = this.map.getLayer("postionLayer");
        postionLayer.clear();
        postionLayer.add(graphic);
        this.map.centerAt(point);
      }).catch(err => {
        this.alertCtrl.create({ title: '提示', message: err.message, buttons: ["确定"] }).present();
      })

    }).catch(err => {
      this.alertCtrl.create({ title: '提示', message: err.message, buttons: ["确定"] }).present();
    });
  }
  private stopInspection() {
    this.watchId.unsubscribe();
    this.watchId = null;
    this.lastX = 0;
    this.lastY = 0;
    this.trueDistance = 0;
    this.truePt = {
      X: 0,
      Y: 0
    };
    this.truePts = [];
  }
  public watchPosition() {
    if (this.isCheck) {
      //this.backgroundMode.disable();
      this.imgSrc = "assets/imgs/startCheck.png";
      let pt = this.truePts[this.truePts.length - 1];
      if (pt && pt.X && pt.Y) {
        let item = {
          X: pt.X,
          Y: pt.Y,
          Distance: 0,
          PDate: this.getDateStr(),
          Remark: "stop"
        };
        this.sendPostion(item);
      }
      this.batterysubscription.unsubscribe();
      this.stopInspection();
      this.backgroundGeolocation.stop();
      clearInterval(this.postId);
      this.postId = null;
      clearInterval(this.postHeartId);
      this.postHeartId = null;

    }
    else {
     // this.backgroundMode.enable();
      this.imgSrc = "assets/imgs/endCheck.gif"; 
      this.backgroundGeolocation.start();
      this.startInspection();
      this.post();
    }
    this.isCheck = !this.isCheck;
  }
  private startInspection() {
    this.watchId = this.geolocation.watchPosition({ timeout: 5000, enableHighAccuracy: true }).subscribe(position => {
      this.getPositionSuccess(position.coords);
    }, err => {
      alert(err.message)
    });
  }
  private post() {
    this.postHeartId = setInterval(() => {
      this.postHeart(false);
    }, 20000);
    this.postId = setInterval(() => {
      if (this.truePts.length < 1) {
        return;
      }
      let distance = 0;
      if (this.truePts.length == 1) {
        distance = 0;
      }
      else {
        distance = this.trueDistance;
      }
      let pt = this.truePts[this.truePts.length - 1];
      if (pt && !pt.isPost) {
        let item = {
          X: pt.X,
          Y: pt.Y,
          Distance: distance,
          PDate: this.getDateStr(),
          Remark: "3"
        };
        this.sendPostion(item);
        pt.isPost = true;
      }
    }, 10000);
  }
  private postHeart(Remove: boolean) {
    this.http.post(AppConfig.appUrl + "/Dcqtech.ThreeDMap/Home/PostHeart", { Remove: Remove }, {}).subscribe((data: Response) => {

    }, err => {
      debugger;
    });
  }
  private getDateStr() {
    const Dates = new Date();
    const year: number = Dates.getFullYear();
    const month: any = (Dates.getMonth() + 1) < 10 ? '0' + (Dates.getMonth() + 1) : (Dates.getMonth() + 1);
    const day: any = Dates.getDate() < 10 ? '0' + Dates.getDate() : Dates.getDate();
    const hour: any = Dates.getHours() < 10 ? '0' + Dates.getHours() : Dates.getHours();
    const minute: any = Dates.getMinutes() < 10 ? '0' + Dates.getMinutes() : Dates.getMinutes();
    const second: any = Dates.getSeconds() < 10 ? '0' + Dates.getSeconds() : Dates.getSeconds();
    let dateStr = year + '-' + month + '-' + day + " " + hour + ":" + minute + ":" + second;
    return dateStr;
  }
  private getPositionSuccess(location) {
    loadModules(["esri/geometry/Point", "esri/geometry/Polyline", "esri/symbols/SimpleLineSymbol", "esri/graphic", "esri/Color"]).then(([Point, Polyline, SimpleLineSymbol, Graphic, Color]) => {
      let tempTime = (new Date()).getTime();// position.timestamp; //
      // i++;
      // this.toastCtrl.create({ message: String(i), duration: 1500, position: "top" }).present();
      if (!this.isCheck) {
        return;
      }
      if (!AppConfig.online) {
        this.stopInspection();
        this.backgroundGeolocation.stop();
        this.isCheck = false;
        this.imgSrc = "assets/imgs/startCheck.png";
        this.alertCtrl.create({ title: '提示', subTitle: '网络已断开，巡检结束!', buttons: ['确定'] }).present();
      }

      if (location !== undefined) {
        if (this.lastX != this.lastY) {
          let offX = Math.abs(this.lastX - location.longitude);
          let offY = Math.abs(this.lastY - location.latitude);

          if (offX == 0 && offY == 0) {
            return;
          }
          // if (offX < 0.0001 && offY < 0.0001) {
          //   //太近了 舍弃
          //   return;
          // }
          let distance = this.getDistance(this.lastX, this.lastY, location.longitude, location.latitude);
          let time: number = (tempTime - this.lastDateTime);

          if (distance <= 5 * time / 1000 && time <= 13500) {
            //考虑到误差 速度以5m/s计算;
            //防止退屏和屏幕切换,获取两点间隔时间超过10s

            this.truePts.push({ X: location.longitude, Y: location.latitude, isPost: false });
            if (this.truePts.length > 2) {
              this.truePts.splice(0, 1);
            }
            if (this.truePts.length == 2) {
              let polyline = new Polyline([[this.truePts[0].X, this.truePts[0].Y], [this.truePts[1].X, this.truePts[1].Y]]);
              let lineSymbol = new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new Color([255, 0, 0]), 3);
              let graphic = new Graphic(polyline, lineSymbol);
              let walkLayer = this.map.getLayer("walkLayer");
              walkLayer.add(graphic);
              this.trueDistance = this.getDistance(this.truePts[0].X, this.truePts[0].Y, this.truePts[1].X, this.truePts[1].Y);
              let point = new Point(this.truePts[1].X, this.truePts[1].Y, this.map.spatialReference);
              let postionLayer = this.map.getLayer("postionLayer");
              var grap = postionLayer.graphics[0];
              grap.setGeometry(point);
              this.map.centerAt(point);
            }
          }
        }
        //this.toastCtrl.create({ message: String(tempTime), duration: 500 }).present();
        this.lastDateTime = tempTime;
        this.lastX = location.longitude;
        this.lastY = location.latitude;
      }

    });
  }
  private getDistance(latA, lonA, latB, lonB) {
    let earthR = 6371000.;
    let x = Math.cos(latA * this.PI / 180.) * Math.cos(latB * this.PI / 180.) * Math.cos((lonA - lonB) * this.PI / 180);
    let y = Math.sin(latA * this.PI / 180.) * Math.sin(latB * this.PI / 180.);
    let s = x + y;
    if (s > 1) s = 1;
    if (s < -1) s = -1;
    let alpha = Math.acos(s);
    let distance = alpha * earthR;
    return distance;
  }
  private sendPostion(param: any) {
    this.http.post(AppConfig.appUrl + "/Dcqtech.ThreeDMap/Home/PostPosition", param, {}).subscribe((data: Response) => {
      if (data["Success"]) {
        // let toast = this.toastCtrl.create({
        //   message: '坐标上传成功',
        //   duration: 1000,
        //   position: 'bottom'
        // });
        // toast.present();
      }
      else {
        // let toast = this.toastCtrl.create({
        //   message: '坐标上传失败',
        //   duration: 1000,
        //   position: 'top'
        // });
        // toast.present();
      }
    }, err => {
      let toast = this.toastCtrl.create({
        message: "连接服务器失败",
        duration: 1500,
        position: 'top'
      });
      toast.present();
    });
  }
  private loadEsri() {
    if (!isLoaded()) {
      loadScript({
        url: "http://113.207.113.10:82/arcgis_js_api_319/library/3.19/3.19/init.js"
        // url: '/arcgis_js_v321_api/init.js'
      }).then(() => {
        this.createMapview();
      }).catch(err => {
        console.error(err.message);
      })
    }
    else {
      this.createMapview();
    }
  }
  private createMapview() {
    loadModules([
      "esri/map",
      "esri/layers/ArcGISTiledMapServiceLayer",
      "esri/layers/ArcGISDynamicMapServiceLayer",
      "esri/layers/GraphicsLayer"
    ]).then(
      ([Map, ArcGISTiledMapServiceLayer, ArcGISDynamicMapServiceLayer, GraphicsLayer]) => {
        this.map = new Map("map", {
          sliderPosition: "bottom-right",
          logo: false,
          zoom: 1
        });
        let layerAddress = AppConfig.getBaseMapAddress();
        let layer = new ArcGISTiledMapServiceLayer(layerAddress
          //"http://113.207.113.10:8081/arcgis/rest/services/SQ_SYL/SQ_SYL_bg/MapServer"
        );
        this.map.addLayer(layer);
        let layer2 = new ArcGISTiledMapServiceLayer(
          "http://113.207.113.10:8081/arcgis/rest/services/SQ/Bg_KCY/MapServer"
        );
        this.map.addLayer(layer2);
        let postionLayer = new GraphicsLayer({ id: 'postionLayer' });
        this.map.addLayer(postionLayer);
        let walkLayer = new GraphicsLayer({ id: 'walkLayer' });
        this.map.addLayer(walkLayer);
        this.map.on("load", () => {
          this.position();
        })
      }).catch(err => {
        // console.error(err.message);
      })
  }

}

