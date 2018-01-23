import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController,LoadingController,Platform} from 'ionic-angular';
import { TabsPage } from "../tabs/tabs";
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { AppConfig } from '../../app/app.config';
import{BackButtonService } from "../../providers/buttonback-service/buttonback-service";
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare function escape(s:string): string;
@IonicPage({
  // segment: 'login',
  // name:"login",
  // priority: 'high'
})
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {
  loginForm;
  
  constructor(platform:Platform,private formBuilder:FormBuilder,public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public http: HttpClient,
 public loadingCtrl: LoadingController,private backButtonService:BackButtonService) {
    this.loginForm = this.formBuilder.group({
      'userName': ['', [Validators.required]],  
      'password': ['', [Validators.required]]
      //'validCode':['', [Validators.required]]
      });
      platform.ready().then(() => {
        this.backButtonService.registerBackButtonAction(null);
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  logIn(user,event) {
    // event.preventDefault();//该方法将通知 Web 浏览器不要执行与事件关联的默认动作
    let loading = this.loadingCtrl.create({
      content: '用户登录中,请稍候...'
    });
    
    loading.present();
    let logUser={
      sta: this.bc(escape((user["userName"]))),
      stb: this.bc(user['password']),   
      sts: this.randomString(7),
      stf: this.randomString(12),
      stc: this.randomString(4),
      validCode:user['validCode']
    };
    this.http.post(AppConfig.appUrl+"/User/Account/LogOnForApp",logUser,{}).subscribe((data: Response) => {
      loading.dismiss();
      if (data["Success"]) {   
        window.localStorage.setItem('username',user["userName"]);
        window.localStorage.setItem('userphoto',data["Data"]["Photo"]);
        window.localStorage.setItem('usercommunity',data["Data"]["CommunityName"]);
        window.localStorage.setItem('isLogin','login');
        AppConfig.setBaseMapAddress(data["Data"]["BaseMapAddress"]);
        setTimeout(()=>{
         // this.navCtrl.popTo();
          this.navCtrl.push(TabsPage);
        },200)
       
      }
      else {
        let toast = this.toastCtrl.create({
          message: '用户名密码错误',
          duration: 3000,
          position: 'top'
        });
        toast.present();
      }     
    },err=>{
      alert(JSON.stringify(err));
      loading.dismiss();
      let toast = this.toastCtrl.create({
        message: '连接服务器失败',
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });

    /*if (username.value.length == 0) {
      let toast = this.toastCtrl.create({
        message: '请输入用户名',
        duration: 3000,
        position: 'top'
      });
      toast.present();
    } else if (password.value.length == 0) {
      let toast = this.toastCtrl.create({
        message: '请输入密码',
        duration: 3000,
        position: 'top'
      });
      toast.present();
    } else {
      //let userinfo: string = '用户名：' + username.value + '密码：' + password.value;
      //alert(userinfo);
      this.http.post("http://zhsq.cqmap.com/syl/User/Account/LogOnForApp", JSON.stringify({
        sta: this.bc((username.value)),
        stb: this.bc(password.value)
      
        sts: this.randomString(7),
        stf: this.randomString(12),
        stc: this.randomString(4)
      })).subscribe((data: Response) => {
        if (data["Success"]) {
          this.navCtrl.push(TabsPage);
        }
        else {
          let toast = this.toastCtrl.create({
            message: '用户名密码错误',
            duration: 3000,
            position: 'top'
          });
          toast.present();
        }
        
      },err=>{
        let toast = this.toastCtrl.create({
          message: err.message,
          duration: 3000,
          position: 'top'
        });
        toast.present();
      });
      //this.navCtrl.push(TabsPage);
}*/
  }
  randomString(len) {
    len = len || 32;
    var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';    /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
    var maxPos = $chars.length;
    var pwd = '';
    for (let i = 0; i < len; i++) {
      pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return pwd;
  }
  bc(str) {
    var eChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var out, i, len;
    var c1, c2, c3;
    len = str.length;
    i = 0;
    out = "";
    while (i < len) {
      c1 = str.charCodeAt(i++) & 0xff;
      if (i == len) {
        out += eChars.charAt(c1 >> 2);
        out += eChars.charAt((c1 & 0x3) << 4);
        out += "==";
        break;
      }
      c2 = str.charCodeAt(i++);
      if (i == len) {
        out += eChars.charAt(c1 >> 2);
        out += eChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
        out += eChars.charAt((c2 & 0xF) << 2);
        out += "=";
        break;
      }
      c3 = str.charCodeAt(i++);
      out += eChars.charAt(c1 >> 2);
      out += eChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
      out += eChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
      out += eChars.charAt(c3 & 0x3F);
    }
    return out;
  }
}
