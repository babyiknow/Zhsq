import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import{PersonListPage} from '../person-list/person-list';
import{RoomListPage} from '../room-list/room-list';
import{CarListPage} from '../car-list/car-list';
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }
  public goto(type:string){
    if(type=="room"){
      this.navCtrl.push(RoomListPage);
    }
    else if(type=="car"){
     this.navCtrl.push(CarListPage);
    }
    else{
     this.navCtrl.push(PersonListPage);
    }
 }
}
