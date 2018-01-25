import { Component } from '@angular/core';
import { Platform, ToastController, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';
import { AppConfig } from './app.config';
import { HttpClient } from '@angular/common/http';
import { AppVersion } from '@ionic-native/app-version';
import { AppUpdateService } from "../providers/appupdate-service/appupdate-service";
import { Network } from '@ionic-native/network';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = TabsPage;
  userName;
  userPhoto;
  userCommunity;
  versionNum;
  toast;
  disconnect;
  connect;
  isIos = false;
  constructor(private platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private http: HttpClient, private toastCtrl: ToastController,
    private appVersion: AppVersion, private appupdateService: AppUpdateService, private alertCtrl: AlertController, private network: Network) {
    if (!this.islogin()) {
      this.rootPage = LoginPage;
    }
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      this.addConnectEvent();
      if (!platform.is("ios")) {
        this.isIos = false;
      }
      else if (platform.is("ios")) {
        this.isIos = true;
      }
      this.appVersion.getVersionNumber().then(value => {
        this.versionNum = value;
        if (!this.isIos) {      
          this.appupdateService.checkUpdate(value.split('.').join(""));
          //this.isIos=false;
        }
      });
      splashScreen.hide();
    });
  }
  private addConnectEvent() {
    this.disconnect = this.network.onDisconnect().subscribe(() => {
      AppConfig.online = false;
      this.toast = this.toastCtrl.create({ message: "网络已断开", cssClass: "toast-danger", position: 'top' });
      this.toast.present();
    });
    this.connect = this.network.onConnect().subscribe(() => {
      AppConfig.online = true;
      if (this.toast) {
        this.toast.dismiss();
        this.toastCtrl.create({ message: "网络已连接", cssClass: "toast-balance", position: 'top', duration: 1500 }).present();
      }
    });
  }
  private islogin() {
    let isLogin = window.localStorage.getItem("isLogin");
    let time = window.localStorage.getItem("time");
    let now = (new Date()).getTime();
    let baseAddress = window.localStorage.getItem('baseMapAddress');
    AppConfig.setBaseMapAddress(baseAddress);
    if (time) {
      let timeNo = Number(time);
      if ((now - timeNo) / (1000 * 60 * 60 * 24) < 7) {
        if (isLogin && isLogin == "login") {
          return true;
        }
      }
    }
    return false;

  }
  public logOff() {
    this.alertCtrl.create({
      title: '提示',
      message: '是否确认退出?',
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: '确定',
          handler: () => {
            this.http.post(AppConfig.appUrl + "/User/Account/LogOffForApp", {}, {}).subscribe(res => {
              window.localStorage.clear();
              this.toastCtrl.create({ message: "退出成功", duration: 1000 }).present();
              this.platform.exitApp();
            }, err => {
              this.toastCtrl.create({ message: '连接服务器失败', duration: 3000, position: 'top' }).present();;
            });
          }
        }
      ]
    }).present();

  }
  public menuOpen() {
    this.userName = window.localStorage.getItem("username");
    this.userPhoto = window.localStorage.getItem("userphoto");
    this.userCommunity = window.localStorage.getItem("usercommunity");
  }

}
