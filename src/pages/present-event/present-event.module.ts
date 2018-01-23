import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PresentEventPage } from './present-event';

@NgModule({
  declarations: [
    PresentEventPage,
  ],
  imports: [
    IonicPageModule.forChild(PresentEventPage),
  ],
})
export class PresentEventPageModule {}
