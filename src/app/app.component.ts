import { Component } from '@angular/core';
import { Platform, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { AppConfig } from './app.config';
import { HttpClient } from '@angular/common/http';
import { AppVersion } from '@ionic-native/app-version';
import { AppUpdateService } from "../providers/appupdate-service/appupdate-service";
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = LoginPage;
  userName;
  userPhoto;
  userCommunity;
  versionNum;
  constructor(private platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private http: HttpClient, private toastCtrl: ToastController,
    private appVersion: AppVersion, private appupdateService: AppUpdateService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.appVersion.getVersionNumber().then(value => {
        this.versionNum = value;
        if(!platform.is("ios")){
          this.appupdateService.checkUpdate(value);
        }
      });
    });
  }
  public logOff() {
    this.http.post(AppConfig.appUrl + "/User/Account/LogOffForApp", {}, {}).subscribe(res => {
      this.toastCtrl.create({ message: "退出成功", duration: 1000 }).present();
      this.platform.exitApp();
    }, err => { 
      let toast = this.toastCtrl.create({
        message: '连接服务器失败',
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }
  public menuOpen() {
    this.userName = window.localStorage.getItem("username");
    this.userPhoto = window.localStorage.getItem("userphoto");
    this.userCommunity = window.localStorage.getItem("usercommunity");
  }

}
