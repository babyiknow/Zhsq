import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, ToastController } from 'ionic-angular';
import { isLoaded, loadScript, loadModules } from 'esri-loader/dist/esm/esri-loader';
import { Geolocation } from '@ionic-native/geolocation';
import { Platform } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../../app/app.config';
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
  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController, platform: Platform, public geolocation: Geolocation,
    private http: HttpClient) {
    platform.ready().then(() => {
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
      this.loadEsri();
    });
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
        let alert = this.alertCtrl.create({
          title: '提示',
          message: err.message,
          buttons: ["确定"]
        });
        alert.present();
      })

    }).catch(err => {
      let alert = this.alertCtrl.create({
        title: '提示',
        message: err.message,
        buttons: ["确定"]
      });
      alert.present();
    });
  }
  public watchPosition() {
    if (this.isCheck) {
      this.imgSrc = "assets/imgs/startCheck.png"
      this.isCheck = !this.isCheck;
      this.watchId.unsubscribe();
      clearInterval(this.postId);
    }
    else {
      this.isCheck = !this.isCheck;
      this.imgSrc = "assets/imgs/endCheck.gif"
      loadModules(["esri/geometry/Point", "esri/geometry/Polyline", "esri/symbols/SimpleLineSymbol", "esri/graphic", "esri/Color", "esri/geometry/geometryEngine"]).then(([Point, Polyline, SimpleLineSymbol, Graphic, Color, geometryEngine]) => {
        this.watchId = this.geolocation.watchPosition({ maximumAge: 10000000, timeout: 5000, enableHighAccuracy: true }).subscribe(position => {
          let tempTime = (new Date()).getTime();
          if (!this.isCheck) {
            return;
          }
          if (position.coords !== undefined) {
            let offX = Math.abs(this.lastX - position.coords.longitude);
            let offY = Math.abs(this.lastY - position.coords.latitude);
            if (offX < 0.001 && offY < 0.001) {
              //太近了 舍弃
              return;
            }
            if (this.lastX != this.lastY) {
              let distance = geometryEngine.distance(new Point(this.lastX, this.lastY), new Point(position.coords.longitude, position.coords.latitude), 9001);
              let time: number = (tempTime - this.lastDateTime);
              this.toastCtrl.create({ message: String(time), duration: 500 }).present();
              if (distance <= 5 * time / 1000) {//考虑到误差 速度以5m/s计算
                this.truePts.push({ X: position.coords.longitude, Y: position.coords.latitude, isPost: false });
                if (this.truePts.length > 2) {
                  this.truePts.splice(0, 1);
                }
                if (this.truePts.length == 2) {
                  let polyline = new Polyline([[this.truePts[0].X, this.truePts[0].Y], [this.truePts[1].X, this.truePts[1].Y]]);
                  let lineSymbol = new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new Color([255, 0, 0]), 3);
                  let graphic = new Graphic(polyline, lineSymbol);
                  let walkLayer = this.map.getLayer("walkLayer");
                  walkLayer.add(graphic);
                  this.trueDistance = geometryEngine.distance(new Point(this.truePts[0].X, this.truePts[0].Y), new Point(this.truePts[1].X, this.truePts[1].Y), 9001);
                  let point = new Point(this.truePts[1].X, this.truePts[1].Y, this.map.spatialReference);
                  let postionLayer = this.map.getLayer("postionLayer");
                  var grap = postionLayer.graphics[0];
                  grap.setGeometry(point);
                  this.map.centerAt(point);
                }
              }
              this.lastDateTime = tempTime;
              this.lastX = position.coords.longitude;
              this.lastY = position.coords.latitude;
            }
          }
        });
        this.postId = setInterval(() => {
          if (this.truePts.length < 1) {
            return;
          }
          let distance = 0;
          if (this.truePts.length == 1) {
            distance = 0;
          }
          else {
            loadModules(["esri/geometry/Point", "esri/geometry/geometryEngine"]).then(([Point, geometryEngine]) => {
              distance = geometryEngine.distance(new Point(this.truePts[0].X, this.truePts[0].Y), new Point(this.truePts[1].X, this.truePts[1].Y), 9001);
            })
          }
          let pt = this.truePts[this.truePts.length - 1];
          if (!pt.isPost) {
            let item = {
              X: pt.X,
              Y: pt.Y,
              Distance: distance,
              Date: this.getDateStr()
            };
            this.sendPostion(item);
          }
        }, 10000);
      });
    }
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
  private sendPostion(param: any) {
    this.http.post(AppConfig.appUrl + "/Dcqtech.ThreeDMap/Home/PostPosition", param, {}).subscribe((data: Response) => {
      if (data["Success"]) {
        let toast = this.toastCtrl.create({
          message: '坐标上传成功',
          duration: 3000,
          position: 'bottom'
        });
        toast.present();
      }
      else {
        let toast = this.toastCtrl.create({
          message: '坐标上传失败',
          duration: 3000,
          position: 'top'
        });
        toast.present();
      }
    }, err => {
      let toast = this.toastCtrl.create({
        message: err.message,
        duration: 3000,
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
        console.error(err.message);
      })
  }

}
