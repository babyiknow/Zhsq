import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DealEventPage } from './deal-event';

@NgModule({
  declarations: [
    DealEventPage,
  ],
  imports: [
    IonicPageModule.forChild(DealEventPage),
  ],
})
export class DealEventPageModule {}
