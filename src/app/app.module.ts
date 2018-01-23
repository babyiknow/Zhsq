import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EventPage } from '../pages/event/event';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DepartmentServiceProvider } from '../providers/department-service/department-service';
import { UserServiceProvider } from '../providers/user-service/user-service';
import { Geolocation } from '@ionic-native/geolocation';
import { Camera } from '@ionic-native/camera';
import { FileTransfer } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Media } from '@ionic-native/media';
import { LoginPage } from '../pages/login/login';
import { MyEventPage } from '../pages/my-event/my-event';
import { CarListPage } from '../pages/car-list/car-list';
import { DealEventPage } from '../pages/deal-event/deal-event';
import { PresentEventPage } from '../pages/present-event/present-event';
import { PersonListPage } from '../pages/person-list/person-list';
import { RoomListPage } from '../pages/room-list/room-list';
import { AudioPage } from '../pages/audio/audio';
import { EventListPage } from '../pages/event-list/event-list';
import { DetailEventPage } from '../pages/detail-event/detail-event'
import { HttpServiceProvider } from '../providers/http-service/http-service';
import { AppVersion } from '@ionic-native/app-version';
import { AppUpdate } from '@ionic-native/app-update';
import { FileOpener } from '@ionic-native/file-opener';
import { BackButtonService } from '../providers/buttonback-service/buttonback-service';
import { AppUpdateService } from "../providers/appupdate-service/appupdate-service";
import { PicturePage } from "../pages/picture/picture";
import{AppConfig} from './app.config';
@NgModule({
  declarations: [
    MyApp,
    EventPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    MyEventPage,
    CarListPage,
    DealEventPage,
    PresentEventPage,
    PersonListPage,
    RoomListPage,
    AudioPage,
    EventListPage,
    DetailEventPage,
    PicturePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    EventPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    MyEventPage,
    CarListPage,
    DealEventPage,
    PresentEventPage,
    PersonListPage,
    RoomListPage,
    AudioPage,
    EventListPage,
    DetailEventPage,
    PicturePage,
    
  ],
  providers: [
    StatusBar,
    AppConfig,
    SplashScreen,
    Geolocation,
    File,
    FileOpener,
    AppVersion,
    AppUpdate,
    FileTransfer,
    Camera,
    Media,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    DepartmentServiceProvider,
    UserServiceProvider,
    HttpServiceProvider,
    BackButtonService,
    AppUpdateService
  ]
})
export class AppModule { }
