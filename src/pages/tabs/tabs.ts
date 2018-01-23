import { Component, ViewChild } from '@angular/core';
import { EventPage } from '../event/event';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { BackButtonService } from "../../providers/buttonback-service/buttonback-service"
import { Platform, Tabs } from 'ionic-angular';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  @ViewChild('myTabs') tabRef: Tabs;
  tab1Root = HomePage;
  tab2Root = EventPage;
  tab3Root = ContactPage;
  public backButtonPressed: boolean = false;
  constructor(platform: Platform, private backButtonService: BackButtonService) {
    platform.ready().then(() => {
        
      this.backButtonService.registerBackButtonAction(this.tabRef);
      
      // this.platform.registerBackButtonAction(() => {
      //   if (this.backButtonPressed) {
      //     this.platform.exitApp();
      //   } else {
      //     let toast = this.toastCtrl.create({
      //       message: '再按一次退出应用',
      //       position: "top",
      //       duration: 2000
      //     });
      //     toast.present();
      //     this.backButtonPressed = true;
      //     setTimeout(() => {
      //       this.backButtonPressed = false;
      //     }, 2000)
      //   }
      // })
    })
  }
  
  // ionViewWillEnter(){
  //  let isLogin= window.localStorage.getItem("isLogin");
  //  if(!isLogin&&isLogin!="login"){
  //    this.navCtrl.push("login");
  //  }
  // }
}
