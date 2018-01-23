webpackJsonp([12],{

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CarListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CarListPage = (function () {
    function CarListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CarListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CarListPage');
    };
    CarListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-car-list',template:/*ion-inline-start:"D:\Projects\Cordova\Zhsq\src\pages\car-list\car-list.html"*/'<!--\n  Generated template for the CarListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>车辆管理</ion-title>\n    <ion-buttons end>\n        <button ion-button icon-only >\n          <ion-icon name="add-circle"></ion-icon>\n        </button>\n      </ion-buttons>\n  </ion-navbar>\n  \n</ion-header>\n\n\n<ion-content style="padding:5px">\n    <ion-searchbar\n    [(ngModel)]="searchText"\n    [showCancelButton]="shouldShowCancel" placeholder="搜索">\n  </ion-searchbar>\n</ion-content>\n'/*ion-inline-end:"D:\Projects\Cordova\Zhsq\src\pages\car-list\car-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], CarListPage);
    return CarListPage;
}());

//# sourceMappingURL=car-list.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DealEventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_config__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__audio_audio__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









//import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker';
/**
 * Generated class for the DealEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DealEventPage = (function () {
    function DealEventPage(navCtrl, navParams, http, camera, actionSheetCtrl, transfer, file, modalCtrl, toastCtrl, loadCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.camera = camera;
        this.actionSheetCtrl = actionSheetCtrl;
        this.transfer = transfer;
        this.file = file;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.loadCtrl = loadCtrl;
        this.pictures = [];
        this.audios = [];
        this.eventId = navParams.get("EventId");
        this.form = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            "handleType": new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]({ value: '2004', disabled: false }),
            "detail": new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]({ value: "", disabled: false })
        });
    }
    DealEventPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyEventPage');
    };
    DealEventPage.prototype.deleteAudio = function (event, url) {
        event.stopPropagation();
        var index = this.audios.indexOf(url);
        if (index > -1) {
            this.audios.splice(index, 1);
        }
    };
    DealEventPage.prototype.delImg = function (picture) {
        var index = this.pictures.indexOf(picture);
        if (index > -1) {
            this.pictures.splice(index, 1);
        }
    };
    DealEventPage.prototype.showActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: '选择照片',
            buttons: [
                {
                    text: '拍照',
                    handler: function () {
                        var options = {
                            quality: 80,
                            destinationType: _this.camera.DestinationType.FILE_URI,
                            encodingType: _this.camera.EncodingType.JPEG,
                            mediaType: _this.camera.MediaType.PICTURE,
                            sourceType: _this.camera.PictureSourceType.CAMERA
                        };
                        _this.camera.getPicture(options).then(function (imageData) {
                            //this.pictures.push(imageData);
                            _this.pictures.splice(0, 0, imageData);
                        }, function (err) {
                            // Handle error
                        });
                    }
                },
                {
                    text: '相册选取',
                    handler: function () {
                        var options = {
                            quality: 80,
                            destinationType: _this.camera.DestinationType.DATA_URL,
                            encodingType: _this.camera.EncodingType.JPEG,
                            mediaType: _this.camera.MediaType.PICTURE,
                            sourceType: 2
                        };
                        _this.camera.getPicture(options).then(function (imageData) {
                            //alert(imageData);
                            var base64Image = 'data:image/jpeg;base64,' + imageData;
                            _this.pictures.splice(0, 0, base64Image);
                        }, function (err) {
                        });
                    }
                },
                {
                    text: '取消',
                    handler: function () {
                    }
                }
            ]
        });
        actionSheet.present();
    };
    DealEventPage.prototype.uploadFile = function (fileUrl, params) {
        var _this = this;
        var mimeType = "image/jpeg";
        if (fileUrl.indexOf(".mp3") > -1) {
            mimeType = "audio/mpeg";
        }
        var options = {
            fileKey: 'file',
            fileName: fileUrl.substr(fileUrl.lastIndexOf('/') + 1),
            httpMethod: 'post',
            params: params,
            mimeType: mimeType
        };
        var fileTransferObject = this.transfer.create();
        fileTransferObject.upload(fileUrl, encodeURI(__WEBPACK_IMPORTED_MODULE_4__app_app_config__["a" /* AppConfig */].appUrl + "/Dcqtech.App/App/PostFiles"), options)
            .then(function (data) {
            // success
            //alert("321321");
            var toast = _this.toastCtrl.create({
                message: "文件上传成功",
                duration: 500
            });
            toast.present();
        }).catch(function (err) {
            alert(JSON.stringify(err));
            _this.toastCtrl.create({
                message: err.message,
                duration: 500
            }).present();
        });
    };
    DealEventPage.prototype.showAudioRecord = function () {
        var _this = this;
        var model = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__audio_audio__["a" /* AudioPage */], { type: "record" });
        model.onDidDismiss(function (data) {
            if (data && data["fileName"])
                _this.audios.splice(0, 0, data["fileName"]);
        });
        model.present();
    };
    DealEventPage.prototype.playRecord = function (url) {
        var model = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__audio_audio__["a" /* AudioPage */], { type: "play", path: url });
        model.present();
    };
    DealEventPage.prototype.doSubmit = function (event) {
        var _this = this;
        //alert(JSON.stringify(this.form.value));
        if (!this.form.value["detail"] || this.form.value["detail"] == "") {
            var toast = this.toastCtrl.create({
                message: "请先填写说明",
                duration: 1000
            });
            toast.present();
            return;
        }
        var loading = this.loadCtrl.create({
            spinner: 'ios',
            content: '数据提交中，请稍候...',
            dismissOnPageChange: false
        });
        loading.present();
        var jsondata = {
            eventId: this.eventId,
            HType: this.form.value["handleType"],
            NextUser_ID: 0,
            Detail: this.form.value["detail"],
            NeedAuditing: false
        };
        this.http.post(__WEBPACK_IMPORTED_MODULE_4__app_app_config__["a" /* AppConfig */].appUrl + "/Dcqtech.Affairs/Admin/EventResultsAction", jsondata, {}).subscribe(function (res) {
            loading.dismiss();
            var toast = _this.toastCtrl.create({
                message: "事件处理成功",
                duration: 1000
            });
            if (!res["Status"]) {
                toast.setMessage(res["Msg"]);
                toast.present();
                return;
            }
            _this.pictures.forEach(function (element) {
                _this.uploadFile(element, { param: JSON.stringify({ Id: res["Obj"]["Id"] }) });
            });
            _this.audios.forEach(function (element) {
                _this.uploadFile(_this.file.externalDataDirectory + element, { param: JSON.stringify({ Id: res["Obj"]["Id"] }) });
            });
            toast.setMessage("事件处理成功");
            toast.present();
            setTimeout(function () {
                _this.navCtrl.pop();
                //this.navCtrl.popTo("DetailEventPage");
            }, 1000); //刷新
        }, function (err) {
        });
    };
    DealEventPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-deal-event',template:/*ion-inline-start:"D:\Projects\Cordova\Zhsq\src\pages\deal-event\deal-event.html"*/'<!--\n  Generated template for the DealEventPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>事件处理</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <form  [formGroup]="form">\n    <ion-card>\n      <ion-list radio-group formControlName="handleType">\n        <ion-item-divider>事件处理</ion-item-divider>\n        <ion-item>\n          <ion-label>日常处理</ion-label>\n          <ion-radio value="2004"></ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>通过</ion-label>\n          <ion-radio value="3006"></ion-radio>\n        </ion-item>\n      </ion-list>\n    </ion-card>\n    <ion-card>\n      <ion-item-divider>事件说明</ion-item-divider>\n      <ion-item>\n        <ion-textarea row="3" placeholder="说明" formControlName="detail"></ion-textarea>\n      </ion-item>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-content>\n        <ion-list>\n          <ion-item-divider>图片信息</ion-item-divider>\n          <div class="image-list">\n            <div class="image-item" *ngFor="let picture of pictures">\n                <img [src]="picture"/>\n                <span class="del" (click)="delImg(picture)">\n                  <!-- <div class="fa fa-times-circle"></div> -->\n                  <ion-icon ios="ios-remove-circle" md="md-remove-circle" color="dark"></ion-icon>\n                </span>\n            </div>\n            <div class="image-item" (click)="showActionSheet()">\n              <img [src]="\'assets/imgs/iconfont-tianjia.png\'">\n            </div>\n          </div>\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n    <ion-card>\n      <ion-card-content>\n        <ion-list>\n          <ion-item-divider>音频信息</ion-item-divider>\n          <!-- <ion-item-divider *ngFor="let audio of audios" style="border-bottom:1px sliod red" (click)="playRecord(audio)">\n              <ion-row style="width:100%">\n                  <ion-col col-10 style="line-height:2.1em">{{audio}}</ion-col>\n                  <ion-col col-2><button ion-button small full color="danger" (click)="deleteAudio($event,audio)">\n                      删除\n                    </button></ion-col>\n              </ion-row>\n          </ion-item-divider> -->\n          <div class="data-item" *ngFor="let audio of audios" (click)="playRecord(audio)">\n              <ion-row style="width:100%">\n                  <ion-col col-10 style="line-height:2.1em">{{audio}}</ion-col>\n                  <ion-col col-2><button ion-button small full color="danger" (click)="deleteAudio($event,audio)">\n                      删除\n                    </button></ion-col>\n              </ion-row>\n          </div>    \n          <ion-item>\n            <button ion-button small full color="primary" (click)="showAudioRecord()">\n              开始录音\n            </button>\n          </ion-item>\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n    <div style="padding:5px">\n        <button  ion-button default full color="primary" (click)="doSubmit($event)">提交</button>\n    </div>\n  \n  </form>\n</ion-content>'/*ion-inline-end:"D:\Projects\Cordova\Zhsq\src\pages\deal-event\deal-event.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
    ], DealEventPage);
    return DealEventPage;
}());

//# sourceMappingURL=deal-event.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PicturePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_config__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the PicturePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PicturePage = (function () {
    function PicturePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pictures = [];
        var urlNames = navParams.get("urlNames");
        this.load(urlNames);
    }
    PicturePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PicturePage');
    };
    PicturePage.prototype.load = function (urlNames) {
        var _this = this;
        var urls = urlNames.split(',');
        urls.forEach(function (element) {
            if (element.indexOf(".mp3") < 0) {
                _this.pictures.push(__WEBPACK_IMPORTED_MODULE_2__app_app_config__["a" /* AppConfig */].appUrl + '/User/Affairs/WorkFiles/Get/' + element.split('/').join('|'));
            }
        });
    };
    PicturePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-picture',template:/*ion-inline-start:"D:\Projects\Cordova\Zhsq\src\pages\picture\picture.html"*/'<!--\n  Generated template for the PicturePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>图片预览</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-slides pager style="background:rgba(0, 0, 0, 0.8)">\n    <ion-slide *ngFor="let pic of pictures">\n      <img [src]="pic" *ngIf="pic.indexOf(\'.mp3\')<0">\n      <!-- <audio src="{{pic}}" class="audio"  controls  *ngIf="pic.indexOf(\'.mp3\')>-1" loop onended="javascript:alert(111)"></audio> -->\n    </ion-slide>\n  </ion-slides>\n</ion-content>'/*ion-inline-end:"D:\Projects\Cordova\Zhsq\src\pages\picture\picture.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], PicturePage);
    return PicturePage;
}());

//# sourceMappingURL=picture.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_config__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__detail_event_detail_event__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the EventListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EventListPage = (function () {
    function EventListPage(navCtrl, navParams, http, actionSheetCtrl, dom) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.actionSheetCtrl = actionSheetCtrl;
        this.dom = dom;
        this.queryParam = {
            Search: '',
            Limit: 10,
            Offset: 0
        };
    }
    EventListPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.queryParam.Offset = 0;
        this.http.post(__WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* AppConfig */].appUrl + "/Dcqtech.App/App/EventList", this.queryParam, {}).subscribe(function (data) {
            debugger;
            if (data["Success"]) {
                _this.events = data["Response"]["rows"];
                _this.queryParam.Offset += data["Response"]["rows"].length;
            }
            else {
                alert(data["Message"]);
            }
        }, function (err) {
            alert("错误");
        });
    };
    EventListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EventListPage');
    };
    EventListPage.prototype.assembleHTML = function (event) {
        var html = (event.HUserID || event.PUserID) + ":" + event.LatestResultDetail;
        return this.dom.bypassSecurityTrustHtml(html);
    };
    /**
     * doInfinite
     */
    EventListPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.http.post(__WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* AppConfig */].appUrl + "/Dcqtech.App/App/EventList", this.queryParam, {}).subscribe(function (data) {
            //this.events=data;     
            if (data["Success"]) {
                data["Response"]["rows"].forEach(function (element) {
                    _this.events.push(element);
                });
                _this.queryParam.Offset += data["Response"]["rows"].length;
                if (_this.events.length >= data["Response"]["total"]) {
                    infiniteScroll.enable(false);
                }
            }
            infiniteScroll.complete();
        }, function (err) {
            alert("错误");
        });
    };
    EventListPage.prototype.dealEvent = function (event) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__detail_event_detail_event__["a" /* DetailEventPage */], { event: event });
    };
    EventListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-event-list',template:/*ion-inline-start:"D:\Projects\Cordova\Zhsq\src\pages\event-list\event-list.html"*/'<!--\n  Generated template for the DealEventPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    \n      <ion-navbar>\n        <ion-title>事件处理</ion-title>\n      </ion-navbar>\n    \n    </ion-header>\n    \n    \n    <ion-content style="padding:5px">\n        <!-- <ion-searchbar\n        [(ngModel)]="searchText"\n        [showCancelButton]="shouldShowCancel" placeholder="搜索">\n      </ion-searchbar> -->\n      <ion-list>\n          <ion-item *ngFor="let event of events" (click)="dealEvent(event)">\n              <ion-thumbnail item-start>\n                <img [src]="event.LatestResultPhoto||\'assets/imgs/ic_launcher.png\'">\n              </ion-thumbnail>\n              <h3>{{event.EventItemTypeName+"["}}{{event.PUserID+"]"}}</h3>\n              <p *ngIf="event.LatestResultDetail" [innerHTML]="assembleHTML(event)"></p>\n              <p style="float:left">{{event.LatestResultTime}}</p>\n              <p style="float:right">{{event.Type}}</p>\n          \n            </ion-item>\n            <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n                <ion-infinite-scroll-content  loadingSpinner="bubbles"\n                loadingText="加载更多"></ion-infinite-scroll-content>\n              </ion-infinite-scroll>\n      </ion-list>\n    \n    </ion-content>\n    '/*ion-inline-end:"D:\Projects\Cordova\Zhsq\src\pages\event-list\event-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["c" /* DomSanitizer */]])
    ], EventListPage);
    return EventListPage;
}());

//# sourceMappingURL=event-list.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_esri_loader_dist_esm_esri_loader__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_app_config__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_background_geolocation__ = __webpack_require__(178);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomePage = (function () {
    function HomePage(navCtrl, toastCtrl, alertCtrl, platform, geolocation, http, backgroundGeolocation) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.geolocation = geolocation;
        this.http = http;
        this.backgroundGeolocation = backgroundGeolocation;
        platform.ready().then(function () {
            _this.PI = 3.14159265358979324;
            _this.imgSrc = "assets/imgs/startCheck.png";
            _this.isCheck = false;
            _this.lastX = 0;
            _this.lastY = 0;
            _this.trueDistance = 0;
            _this.truePt = {
                X: 0,
                Y: 0
            };
            _this.truePts = [];
            _this.configureBackgroundGeoLocation();
            // platform.pause.subscribe(() => {
            //   if (this.isCheck) {
            //     this.watchId.unsubscribe();
            //     this.watchId = null;
            //     //this.backgroundGeolocation.start();
            //   }
            // });
            // platform.resume.subscribe(() => {
            //   if (this.isCheck) {
            //     //this.backgroundGeolocation.stop();
            //     this.watchId = this.geolocation.watchPosition({ timeout: 5000, enableHighAccuracy: true }).subscribe(position => {
            //       this.getPositionSuccess(position.coords);
            //     }, err => {
            //       alert(err.message)
            //     });
            //   }
            // })
            _this.loadEsri();
        });
    }
    HomePage.prototype.configureBackgroundGeoLocation = function () {
        var _this = this;
        var config = {
            desiredAccuracy: 0,
            stationaryRadius: 10,
            distanceFilter: 2,
            interval: 1000,
            fastestInterval: 2000,
            notificationTitle: '智慧石油路',
            notificationText: '巡检中',
            activityType: 'AutomotiveNavigation',
            //debug: true, // <-- enable this hear sounds for background-geolocation life-cycle.
            stopOnTerminate: false // <-- enable this to clear background location settings when the app terminates
        };
        this.backgroundGeolocation.configure(config)
            .subscribe(function (location) {
            _this.getPositionSuccess(location);
            if (_this.platform.is("ios")) {
                _this.backgroundGeolocation.finish(); // FOR IOS ONLY
            }
        }, function (err) { alert(err.message); });
    };
    HomePage.prototype.position = function () {
        var _this = this;
        this.geolocation.getCurrentPosition({ timeout: 5000, enableHighAccuracy: true }).then(function (pos) {
            Object(__WEBPACK_IMPORTED_MODULE_2_esri_loader_dist_esm_esri_loader__["b" /* loadModules */])(["esri/geometry/Point", "esri/symbols/PictureMarkerSymbol", "esri/graphic"]).then(function (_a) {
                var Point = _a[0], PictureMarkerSymbol = _a[1], Graphic = _a[2];
                var point = new Point(pos.coords.longitude, pos.coords.latitude, _this.map.spatialReference);
                var symbol = new PictureMarkerSymbol('assets/imgs/layer11.png', 16, 24);
                var graphic = new Graphic(point, symbol);
                var postionLayer = _this.map.getLayer("postionLayer");
                postionLayer.clear();
                postionLayer.add(graphic);
                _this.map.centerAt(point);
            }).catch(function (err) {
                _this.alertCtrl.create({ title: '提示', message: err.message, buttons: ["确定"] }).present();
            });
        }).catch(function (err) {
            _this.alertCtrl.create({ title: '提示', message: err.message, buttons: ["确定"] }).present();
        });
    };
    HomePage.prototype.stopInspection = function () {
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
    };
    HomePage.prototype.watchPosition = function () {
        if (this.isCheck) {
            this.imgSrc = "assets/imgs/startCheck.png";
            var pt = this.truePts[this.truePts.length - 1];
            if (pt && pt.X && pt.Y) {
                var item = {
                    X: pt.X,
                    Y: pt.Y,
                    Distance: 0,
                    PDate: this.getDateStr(),
                    Remark: "stop"
                };
                this.sendPostion(item);
            }
            this.stopInspection();
            this.backgroundGeolocation.stop();
            clearInterval(this.postId);
            this.postId = null;
        }
        else {
            this.imgSrc = "assets/imgs/endCheck.gif";
            this.startInspection();
            this.backgroundGeolocation.start();
            this.post();
        }
        this.isCheck = !this.isCheck;
    };
    HomePage.prototype.startInspection = function () {
        var _this = this;
        this.watchId = this.geolocation.watchPosition({ timeout: 5000, enableHighAccuracy: true }).subscribe(function (position) {
            _this.getPositionSuccess(position.coords);
        }, function (err) {
            alert(err.message);
        });
    };
    HomePage.prototype.post = function () {
        var _this = this;
        this.postId = setInterval(function () {
            if (_this.truePts.length < 1) {
                return;
            }
            var distance = 0;
            if (_this.truePts.length == 1) {
                distance = 0;
            }
            else {
                distance = _this.trueDistance;
            }
            var pt = _this.truePts[_this.truePts.length - 1];
            if (pt && !pt.isPost) {
                var item = {
                    X: pt.X,
                    Y: pt.Y,
                    Distance: distance,
                    PDate: _this.getDateStr(),
                    Remark: "3"
                };
                _this.sendPostion(item);
                pt.isPost = true;
            }
        }, 10000);
    };
    HomePage.prototype.getDateStr = function () {
        var Dates = new Date();
        var year = Dates.getFullYear();
        var month = (Dates.getMonth() + 1) < 10 ? '0' + (Dates.getMonth() + 1) : (Dates.getMonth() + 1);
        var day = Dates.getDate() < 10 ? '0' + Dates.getDate() : Dates.getDate();
        var hour = Dates.getHours() < 10 ? '0' + Dates.getHours() : Dates.getHours();
        var minute = Dates.getMinutes() < 10 ? '0' + Dates.getMinutes() : Dates.getMinutes();
        var second = Dates.getSeconds() < 10 ? '0' + Dates.getSeconds() : Dates.getSeconds();
        var dateStr = year + '-' + month + '-' + day + " " + hour + ":" + minute + ":" + second;
        return dateStr;
    };
    HomePage.prototype.getPositionSuccess = function (location) {
        var _this = this;
        Object(__WEBPACK_IMPORTED_MODULE_2_esri_loader_dist_esm_esri_loader__["b" /* loadModules */])(["esri/geometry/Point", "esri/geometry/Polyline", "esri/symbols/SimpleLineSymbol", "esri/graphic", "esri/Color"]).then(function (_a) {
            var Point = _a[0], Polyline = _a[1], SimpleLineSymbol = _a[2], Graphic = _a[3], Color = _a[4];
            var tempTime = (new Date()).getTime(); // position.timestamp; //
            // i++;
            // this.toastCtrl.create({ message: String(i), duration: 1500, position: "top" }).present();
            if (!_this.isCheck) {
                return;
            }
            if (!__WEBPACK_IMPORTED_MODULE_5__app_app_config__["a" /* AppConfig */].online) {
                _this.stopInspection();
                _this.backgroundGeolocation.stop();
                _this.isCheck = false;
                _this.imgSrc = "assets/imgs/startCheck.png";
                _this.alertCtrl.create({ title: '提示', subTitle: '网络已断开，巡检结束!', buttons: ['确定'] }).present();
            }
            if (location !== undefined) {
                if (_this.lastX != _this.lastY) {
                    var offX = Math.abs(_this.lastX - location.longitude);
                    var offY = Math.abs(_this.lastY - location.latitude);
                    if (offX < 0.0001 && offY < 0.0001) {
                        //太近了 舍弃
                        return;
                    }
                    var distance = _this.getDistance(_this.lastX, _this.lastY, location.longitude, location.latitude);
                    var time = (tempTime - _this.lastDateTime);
                    // this.toastCtrl.create({ message: String(distance), duration: 1500, position: "top" }).present();
                    // this.toastCtrl.create({ message: String(time), duration: 1500, position: "middle" }).present();
                    if (distance <= 5 * time / 1000 && time <= 13500) {
                        //考虑到误差 速度以5m/s计算;
                        //防止退屏和屏幕切换,获取两点间隔时间超过10s
                        _this.truePts.push({ X: location.longitude, Y: location.latitude, isPost: false });
                        if (_this.truePts.length > 2) {
                            _this.truePts.splice(0, 1);
                        }
                        if (_this.truePts.length == 2) {
                            var polyline = new Polyline([[_this.truePts[0].X, _this.truePts[0].Y], [_this.truePts[1].X, _this.truePts[1].Y]]);
                            var lineSymbol = new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new Color([255, 0, 0]), 3);
                            var graphic = new Graphic(polyline, lineSymbol);
                            var walkLayer = _this.map.getLayer("walkLayer");
                            walkLayer.add(graphic);
                            _this.trueDistance = _this.getDistance(_this.truePts[0].X, _this.truePts[0].Y, _this.truePts[1].X, _this.truePts[1].Y);
                            var point = new Point(_this.truePts[1].X, _this.truePts[1].Y, _this.map.spatialReference);
                            var postionLayer = _this.map.getLayer("postionLayer");
                            var grap = postionLayer.graphics[0];
                            grap.setGeometry(point);
                            _this.map.centerAt(point);
                        }
                    }
                }
                //this.toastCtrl.create({ message: String(tempTime), duration: 500 }).present();
                _this.lastDateTime = tempTime;
                _this.lastX = location.longitude;
                _this.lastY = location.latitude;
            }
        });
    };
    HomePage.prototype.getDistance = function (latA, lonA, latB, lonB) {
        var earthR = 6371000.;
        var x = Math.cos(latA * this.PI / 180.) * Math.cos(latB * this.PI / 180.) * Math.cos((lonA - lonB) * this.PI / 180);
        var y = Math.sin(latA * this.PI / 180.) * Math.sin(latB * this.PI / 180.);
        var s = x + y;
        if (s > 1)
            s = 1;
        if (s < -1)
            s = -1;
        var alpha = Math.acos(s);
        var distance = alpha * earthR;
        return distance;
    };
    HomePage.prototype.sendPostion = function (param) {
        var _this = this;
        this.http.post(__WEBPACK_IMPORTED_MODULE_5__app_app_config__["a" /* AppConfig */].appUrl + "/Dcqtech.ThreeDMap/Home/PostPosition", param, {}).subscribe(function (data) {
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
        }, function (err) {
            var toast = _this.toastCtrl.create({
                message: "连接服务器失败",
                duration: 1500,
                position: 'top'
            });
            toast.present();
        });
    };
    HomePage.prototype.loadEsri = function () {
        var _this = this;
        if (!Object(__WEBPACK_IMPORTED_MODULE_2_esri_loader_dist_esm_esri_loader__["a" /* isLoaded */])()) {
            Object(__WEBPACK_IMPORTED_MODULE_2_esri_loader_dist_esm_esri_loader__["c" /* loadScript */])({
                url: "http://113.207.113.10:82/arcgis_js_api_319/library/3.19/3.19/init.js"
                // url: '/arcgis_js_v321_api/init.js'
            }).then(function () {
                _this.createMapview();
            }).catch(function (err) {
                console.error(err.message);
            });
        }
        else {
            this.createMapview();
        }
    };
    HomePage.prototype.createMapview = function () {
        var _this = this;
        Object(__WEBPACK_IMPORTED_MODULE_2_esri_loader_dist_esm_esri_loader__["b" /* loadModules */])([
            "esri/map",
            "esri/layers/ArcGISTiledMapServiceLayer",
            "esri/layers/ArcGISDynamicMapServiceLayer",
            "esri/layers/GraphicsLayer"
        ]).then(function (_a) {
            var Map = _a[0], ArcGISTiledMapServiceLayer = _a[1], ArcGISDynamicMapServiceLayer = _a[2], GraphicsLayer = _a[3];
            _this.map = new Map("map", {
                sliderPosition: "bottom-right",
                logo: false,
                zoom: 1
            });
            var layerAddress = __WEBPACK_IMPORTED_MODULE_5__app_app_config__["a" /* AppConfig */].getBaseMapAddress();
            var layer = new ArcGISTiledMapServiceLayer(layerAddress
            //"http://113.207.113.10:8081/arcgis/rest/services/SQ_SYL/SQ_SYL_bg/MapServer"
            );
            _this.map.addLayer(layer);
            var layer2 = new ArcGISTiledMapServiceLayer("http://113.207.113.10:8081/arcgis/rest/services/SQ/Bg_KCY/MapServer");
            _this.map.addLayer(layer2);
            var postionLayer = new GraphicsLayer({ id: 'postionLayer' });
            _this.map.addLayer(postionLayer);
            var walkLayer = new GraphicsLayer({ id: 'walkLayer' });
            _this.map.addLayer(walkLayer);
            _this.map.on("load", function () {
                _this.position();
            });
        }).catch(function (err) {
            // console.error(err.message);
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\Projects\Cordova\Zhsq\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n      <button ion-button icon-only menuToggle>\n          <ion-icon name="menu"></ion-icon>\n      </button>\n    <ion-title>移动巡检</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div class="main" style="width: 100%;height: 100%;">\n        <div id="map" style="margin-bottom: 0px;z-index: 0;width: 100%;">\n          <div id="maptoolbar" class="maptoolbars" (click)="watchPosition()">\n            <a name="POLYLINE">\n              <img id="img" align="absmiddle" src="{{imgSrc}}" />\n            </a><b></b>\n          </div>\n          <div id="position" class="maptoolbars" style="right: 20px;bottom: 115px;left: auto;" (click)="position()">\n            <a name="POLYLINE">\n              <img id="img" align="absmiddle" src="assets/imgs/location.png" height="28" width="30" />\n            </a><b></b>\n          </div>\n  \n        </div>\n  \n      </div>\n</ion-content>\n'/*ion-inline-end:"D:\Projects\Cordova\Zhsq\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_background_geolocation__["a" /* BackgroundGeolocation */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_config__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_buttonback_service_buttonback_service__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tabs_tabs__ = __webpack_require__(88);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LoginPage = (function () {
    function LoginPage(platform, formBuilder, navCtrl, navParams, toastCtrl, http, loadingCtrl, backButtonService, app) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.backButtonService = backButtonService;
        this.app = app;
        this.loginForm = this.formBuilder.group({
            'userName': ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required]],
            'password': ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required]]
            //'validCode':['', [Validators.required]]
        });
        platform.ready().then(function () {
            _this.backButtonService.registerBackButtonAction(null);
        });
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.logIn = function (user, event) {
        var _this = this;
        // event.preventDefault();//该方法将通知 Web 浏览器不要执行与事件关联的默认动作
        var loading = this.loadingCtrl.create({
            content: '用户登录中,请稍候...'
        });
        loading.present();
        var logUser = {
            sta: this.bc(escape((user["userName"]))),
            stb: this.bc(user['password']),
            sts: this.randomString(7),
            stf: this.randomString(12),
            stc: this.randomString(4),
            validCode: user['validCode']
        };
        this.http.post(__WEBPACK_IMPORTED_MODULE_4__app_app_config__["a" /* AppConfig */].appUrl + "/User/Account/LogOnForApp", logUser, {}).subscribe(function (data) {
            loading.dismiss();
            if (data["Success"]) {
                window.localStorage.setItem('username', user["userName"]);
                window.localStorage.setItem('userphoto', data["Data"]["Photo"]);
                window.localStorage.setItem('usercommunity', data["Data"]["CommunityName"]);
                window.localStorage.setItem('isLogin', 'login');
                window.localStorage.setItem('baseMapAddress', data["Data"]["BaseMapAddress"]);
                window.localStorage.setItem('time', String((new Date()).getTime()));
                __WEBPACK_IMPORTED_MODULE_4__app_app_config__["a" /* AppConfig */].setBaseMapAddress(data["Data"]["BaseMapAddress"]);
                setTimeout(function () {
                    // this.navCtrl.popTo();
                    //this.navCtrl.push(TabsPage);
                    _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_6__tabs_tabs__["a" /* TabsPage */]);
                }, 200);
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: '用户名密码错误',
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
            }
        }, function (err) {
            loading.dismiss();
            var toast = _this.toastCtrl.create({
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
    };
    LoginPage.prototype.randomString = function (len) {
        len = len || 32;
        var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'; /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
        var maxPos = $chars.length;
        var pwd = '';
        for (var i = 0; i < len; i++) {
            pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
        }
        return pwd;
    };
    LoginPage.prototype.bc = function (str) {
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
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"D:\Projects\Cordova\Zhsq\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>登录</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<form [formGroup]="loginForm">\n    <ion-item style="text-align: center">\n      <img src="assets/imgs/userDefaultPic.png" width="127" height="147" alt="" />\n    </ion-item>\n    <ion-item>\n      <ion-label fixed>账号</ion-label>\n      <ion-input type="text" placeholder="请输入账号"  formControlName="userName"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label fixed>密码</ion-label>\n      <ion-input type="password" placeholder="请输入密码" formControlName="password"></ion-input>\n    </ion-item>\n    <div style="text-align: center; margin-top:30px">\n      <button ion-button block color="primary" (click)="logIn(loginForm.value,event)" [disabled]="!loginForm.valid">\n        登录\n      </button>\n    </div>\n  </form>\n  <!--   <form [formGroup]="loginForm">\n   <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-row>\n            <ion-item style="text-align: center">\n              <img src="assets/imgs/userDefaultPic.png" width="127" height="147" alt="" />\n            </ion-item>\n            </ion-row>\n          <ion-row>\n            <ion-col col-3>\n              <ion-label fixed>账号</ion-label>\n            </ion-col>\n            <ion-col>\n              <ion-input type="text" placeholder="请输入账号" formControlName="userName"></ion-input>\n            </ion-col>\n\n          </ion-row>\n          <ion-row>\n            <ion-col col-3>\n              <ion-label fixed>密码</ion-label>\n            </ion-col>\n            <ion-col>\n              <ion-input type="password" placeholder="请输入密码" formControlName="password"></ion-input>\n            </ion-col>\n\n          </ion-row>\n         <!-- <ion-row>\n            <ion-col col-3>\n              <ion-label fixed>验证码</ion-label>\n            </ion-col>\n            <ion-col col-6>\n              <ion-input type="text" placeholder="请输入验证码" formControlName="validCode"></ion-input>\n            </ion-col>\n            <ion-col>\n              <img style="margin-top:8px" align="absmiddle" src="http://zhsq.cqmap.com/syl/User/Account/GetValidateCode" />\n            </ion-col>\n          </ion-row> \n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <div style="text-align: center; margin-top:30px">\n      <button ion-button block color="primary" (click)="logIn(loginForm.value,event)" [disabled]="!loginForm.valid">\n        登录\n      </button>\n    </div>\n  </form>-->\n</ion-content>'/*ion-inline-end:"D:\Projects\Cordova\Zhsq\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__providers_buttonback_service_buttonback_service__["a" /* BackButtonService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyEventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_config__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__detail_event_detail_event__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the MyEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyEventPage = (function () {
    function MyEventPage(navCtrl, navParams, http, actionSheetCtrl, dom) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.actionSheetCtrl = actionSheetCtrl;
        this.dom = dom;
        this.queryParam = {
            Search: '',
            Limit: 10,
            Offset: 0
        };
    }
    MyEventPage.prototype.ionViewWillEnter = function () {
        this.queryParam.Offset = 0;
        this.loadEvent();
    };
    MyEventPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyEventPage');
    };
    MyEventPage.prototype.loadEvent = function () {
        var _this = this;
        this.http.post(__WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* AppConfig */].appUrl + "/Dcqtech.App/App/MyEventList", this.queryParam, {}).subscribe(function (data) {
            //this.events=data;     
            if (data["Success"]) {
                _this.events = data["Response"]["rows"];
                _this.queryParam.Offset += data["Response"]["rows"].length;
            }
        }, function (err) {
            alert("错误");
        });
    };
    MyEventPage.prototype.assembleHTML = function (event) {
        var html = (event.HUserID || event.PUserID) + ":" + event.LatestResultDetail;
        return this.dom.bypassSecurityTrustHtml(html);
    };
    /**
     * doInfinite
     */
    MyEventPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.http.post(__WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* AppConfig */].appUrl + "/Dcqtech.App/App/MyEventList", this.queryParam, {}).subscribe(function (data) {
            //this.events=data;     
            if (data["Success"]) {
                _this.queryParam.Offset += data["Response"]["rows"].length;
                data["Response"]["rows"].forEach(function (element) {
                    _this.events.push(element);
                });
                if (_this.events.length >= data["Response"]["total"]) {
                    infiniteScroll.enable(false);
                }
            }
            infiniteScroll.complete();
        }, function (err) {
            alert("错误");
        });
    };
    MyEventPage.prototype.dealEvent = function (event) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__detail_event_detail_event__["a" /* DetailEventPage */], { event: event });
    };
    MyEventPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-my-event',template:/*ion-inline-start:"D:\Projects\Cordova\Zhsq\src\pages\my-event\my-event.html"*/'<!--\n  Generated template for the MyEventPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>我的事件</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content style="padding:5px">\n    <ion-item *ngFor="let event of events" (click)="dealEvent(event)">\n        <ion-thumbnail item-start>\n          <img [src]="event.LatestResultPhoto||\'assets/imgs/ic_launcher.png\'">\n        </ion-thumbnail>\n        <h3>{{event.EventItemTypeName+"["}}{{event.PUserID+"]"}}</h3>\n        <p *ngIf="event.LatestResultDetail" [innerHTML]="assembleHTML(event)"></p>\n        <p style="float:left">{{event.LatestResultTime}}</p>\n        <p style="float:right">{{event.Type}}</p>\n    \n      </ion-item>\n      <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n          <ion-infinite-scroll-content  loadingSpinner="bubbles"\n          loadingText="加载更多"></ion-infinite-scroll-content>\n        </ion-infinite-scroll>\n</ion-content>'/*ion-inline-end:"D:\Projects\Cordova\Zhsq\src\pages\my-event\my-event.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["c" /* DomSanitizer */]])
    ], MyEventPage);
    return MyEventPage;
}());

//# sourceMappingURL=my-event.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PresentEventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_config__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__audio_audio__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/**
 * Generated class for the PresentEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PresentEventPage = (function () {
    function PresentEventPage(navCtrl, navParams, http, camera, actionSheetCtrl, transfer, file, geolocation, platform, modalCtrl, toastCtrl, loadCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.camera = camera;
        this.actionSheetCtrl = actionSheetCtrl;
        this.transfer = transfer;
        this.file = file;
        this.geolocation = geolocation;
        this.platform = platform;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.loadCtrl = loadCtrl;
        this.audios = [];
        this.pictures = [];
        this.explain = '';
        this.platform.ready().then(function () {
            _this.getPosition();
        });
    }
    PresentEventPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PresentEventPage');
    };
    PresentEventPage.prototype.ngOnInit = function () {
        this.getVillage();
        this.getEventType();
    };
    PresentEventPage.prototype.getPosition = function () {
        var _this = this;
        this.geolocation.getCurrentPosition({ timeout: 5000, enableHighAccuracy: true }).then(function (pos) {
            var currentLon = pos.coords.longitude;
            var currentLat = pos.coords.latitude;
            _this.x = currentLon;
            _this.y = currentLat;
            _this.position = String(_this.x) + ";" + String(_this.y);
            _this.http.post(__WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* AppConfig */].appUrl + "/Dcqtech.Affairs/Content/GetGeoByPoint", {
                geoType: (2 | 4),
                x: currentLon,
                y: currentLat
            }, {}).subscribe(function (data) {
                console.log(data);
                if (data.Status) {
                    if (data.Obj.village.length > 0) {
                        _this.villageSeleted = data.Obj.village[0].ID; //{ value: data.Obj.village[0].ID };
                    }
                    if (data.Obj.grid.length > 0) {
                        _this.gridSeleted = data.Obj.grid[0].ID; // { value: data.Obj.grid[0].ID  };
                    }
                }
            }, function (err) {
                _this.villageSeleted = { value: 3 };
                _this.gridSeleted = { value: 2 };
                alert("错误");
            });
            var url = "http://api.map.baidu.com/geocoder/v2/?location=" + currentLat + "," + currentLon + "&output=json&coordtype=wgs84ll&ak=85ebb7ccfcff99c21498182334c504c5";
            _this.http.get(url).subscribe(function (res) {
                // alert(JSON.stringify(res));
                _this.address = res.result.formatted_address + res.result.sematic_description;
                //alert(this.address);
            }, function (err) {
                alert(JSON.stringify(err));
            });
        }).catch(function (err) {
            _this.x = 106.499486;
            _this.y = 29.547141;
            _this.position = String(_this.x) + ";" + String(_this.y);
            _this.http.post(__WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* AppConfig */].appUrl + "/Dcqtech.Affairs/Content/GetGeoByPoint", {
                geoType: (2 | 4),
                x: _this.x,
                y: _this.y
            }, {}).subscribe(function (data) {
                console.log(data);
                if (data.Status) {
                    if (data.Obj.village.length > 0) {
                        _this.villageSeleted = data.Obj.village[0].ID; //{ value: data.Obj.village[0].ID,text: data.Obj.village[0].VillageName };
                    }
                    if (data.Obj.grid.length > 0) {
                        _this.gridSeleted = data.Obj.grid[0].ID; //{ value: data.Obj.grid[0].ID,text: data.Obj.grid[0].GridName  };
                    }
                }
            }, function (err) {
                _this.villageSeleted = { value: 3 };
                _this.gridSeleted = { value: 2 };
                alert("错误");
            });
        });
    };
    PresentEventPage.prototype.getVillage = function () {
        var _this = this;
        this.http.post(__WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* AppConfig */].appUrl + "/Dcqtech.App/App/GetGeoByCommunityID", {
            geoType: (2 | 4),
            communityId: 0
        }, {}).subscribe(function (data) {
            //this.events=data;     
            if (data["Success"]) {
                _this.villages = data["Response"]["village"];
                _this.grids = data["Response"]["grid"];
            }
        }, function (err) {
            alert("错误");
        });
    };
    PresentEventPage.prototype.getEventType = function () {
        var _this = this;
        this.http.post(__WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* AppConfig */].appUrl + "/Dcqtech.App/App/EventItemTypeListJson", {}, {}).subscribe(function (data) {
            if (data["Success"]) {
                _this.eventTypes = data["Response"];
            }
        }, function (err) {
            alert("错误");
        });
    };
    PresentEventPage.prototype.postEvent = function (event) {
        var _this = this;
        event.stopPropagation();
        var params = {
            address: this.address,
            eventItemType_ID: this.eventTypeSeleted,
            grid_id: this.gridSeleted,
            info: this.explain,
            village_id: this.villageSeleted,
            x: this.x,
            y: this.y,
            source: "App"
        };
        if (!params.grid_id || params.grid_id == "") {
            this.toastCtrl.create({
                message: "请先选择事件所属网格",
                duration: 1500,
                position: "top"
            }).present();
            return;
        }
        if (!params.eventItemType_ID || params.eventItemType_ID == "") {
            this.toastCtrl.create({
                message: "请先选择事件类型",
                duration: 1500,
                position: "top"
            }).present();
            return;
        }
        if (!params.x || params.x == "" || !params.y || params.y == "") {
            this.toastCtrl.create({
                message: "位置信息获取失败,不能提交事件",
                duration: 1500,
                position: "top"
            }).present();
            return;
        }
        var loading = this.loadCtrl.create({
            spinner: 'ios',
            content: '数据提交中，请稍候...',
            dismissOnPageChange: false
        });
        loading.present();
        this.http.post(__WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* AppConfig */].appUrl + "/Dcqtech.App/App/PostEvent", { param: JSON.stringify(params) }, {}).subscribe(function (data) {
            loading.dismiss();
            if (data["Success"]) {
                _this.pictures.forEach(function (element) {
                    _this.uploadFile(element, { param: JSON.stringify({ Id: data["Response"]["Id"] }) });
                });
                _this.audios.forEach(function (element) {
                    if (_this.platform.is("android"))
                        _this.uploadFile(_this.file.externalDataDirectory + element, { param: JSON.stringify({ Id: data["Response"]["Id"] }) });
                    else if (_this.platform.is("ios"))
                        _this.uploadFile(_this.file.tempDirectory + element, { param: JSON.stringify({ Id: data["Response"]["Id"] }) });
                });
                var toast = _this.toastCtrl.create({
                    message: "事件上报成功",
                    duration: 1500
                });
                toast.present();
                _this.navCtrl.pop();
            }
            else {
                _this.toastCtrl.create({
                    message: data["Message"],
                    duration: 1500
                }).present();
            }
        }, function (err) {
            alert("上报事件出错");
        });
    };
    PresentEventPage.prototype.showActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: '选择照片',
            buttons: [
                {
                    text: '拍照',
                    handler: function () {
                        var options = {
                            quality: 80,
                            destinationType: _this.camera.DestinationType.FILE_URI,
                            encodingType: _this.camera.EncodingType.JPEG,
                            mediaType: _this.camera.MediaType.PICTURE
                        };
                        options.sourceType = _this.camera.PictureSourceType.CAMERA;
                        _this.camera.getPicture(options).then(function (imageData) {
                            _this.pictures.splice(0, 0, imageData);
                        }, function (err) {
                            // Handle error
                        });
                    }
                },
                {
                    text: '相册选取',
                    handler: function () {
                        var options = {
                            quality: 80,
                            destinationType: _this.camera.DestinationType.DATA_URL,
                            encodingType: _this.camera.EncodingType.JPEG,
                            mediaType: _this.camera.MediaType.PICTURE,
                            sourceType: 2
                        };
                        _this.camera.getPicture(options).then(function (imageData) {
                            //alert(imageData);
                            var base64Image = 'data:image/jpeg;base64,' + imageData;
                            _this.pictures.splice(0, 0, base64Image);
                        }, function (err) {
                        });
                    }
                },
                {
                    text: '取消',
                    handler: function () {
                    }
                }
            ]
        });
        actionSheet.present();
    };
    PresentEventPage.prototype.uploadFile = function (fileUrl, params) {
        var _this = this;
        var options = {
            fileKey: 'file',
            fileName: fileUrl.substr(fileUrl.lastIndexOf('/') + 1),
            httpMethod: 'post',
            params: params
        };
        var fileTransferObject = this.transfer.create();
        fileTransferObject.upload(fileUrl, __WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* AppConfig */].appUrl + "/Dcqtech.App/App/PostFiles", options)
            .then(function (data) {
            // success
            var toast = _this.toastCtrl.create({
                message: "文件上传成功",
                duration: 500
            });
            toast.present();
        }, function (err) {
            // error
            var toast = _this.toastCtrl.create({
                message: "文件上传失败",
                duration: 500
            });
            toast.present();
        });
    };
    PresentEventPage.prototype.deleteAudio = function (event, url) {
        event.stopPropagation();
        var index = this.audios.indexOf(url);
        if (index > -1) {
            this.audios.splice(index, 1);
        }
    };
    PresentEventPage.prototype.delImg = function (picture) {
        var index = this.pictures.indexOf(picture);
        if (index > -1) {
            this.pictures.splice(index, 1);
        }
    };
    PresentEventPage.prototype.showAudioRecord = function () {
        var _this = this;
        var model = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__audio_audio__["a" /* AudioPage */], { type: "record" });
        model.onDidDismiss(function (data) {
            if (data && data["fileName"])
                _this.audios.splice(0, 0, data["fileName"]);
        });
        model.present();
    };
    PresentEventPage.prototype.playRecord = function (url) {
        if (!url) {
            alert("测试");
            return;
        }
        var model = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__audio_audio__["a" /* AudioPage */], { type: "play", path: url });
        model.present();
    };
    PresentEventPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-present-event',template:/*ion-inline-start:"D:\Projects\Cordova\Zhsq\src\pages\present-event\present-event.html"*/'<!--\n  Generated template for the PresentEventPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>事件上报</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-card>\n    <ion-card-content>\n      <ion-list>\n        <ion-item-divider>位置信息</ion-item-divider>\n        <ion-item>\n          <ion-label>所属小区</ion-label>\n          <ion-select [(ngModel)]="villageSeleted" interface="popover" placeholder="请选择小区" >\n            <ion-option [value]="village.value" *ngFor="let village of villages">{{village.text}}</ion-option>\n          </ion-select>\n        </ion-item>\n        <ion-item>\n          <ion-label>所属网格</ion-label>\n          <ion-select [(ngModel)]="gridSeleted" interface="popover" placeholder="请选择网格" >\n            <ion-option [value]="grid.value" *ngFor="let grid of grids">{{grid.text}}</ion-option>\n          </ion-select>\n        </ion-item>\n        <div class="item item-block item-md item-input">\n          <ion-row>\n            <ion-col col-4>\n              <ion-label>事件地址</ion-label>\n            </ion-col>\n            <ion-col>\n              <ion-input type="text" readonly [(ngModel)]="position"></ion-input>\n            </ion-col>\n            <ion-col center text-center col-3>\n              <button ion-button small>\n                定位\n              </button>\n            </ion-col>\n          </ion-row>\n        </div>\n        <ion-item>\n          <ion-input type="text" [(ngModel)]="address"></ion-input>\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-content>\n      <ion-list>\n        <ion-item-divider>上报信息</ion-item-divider>\n        <ion-item>\n          <ion-label>事件类型</ion-label>\n          <ion-select [(ngModel)]="eventTypeSeleted" interface="popover" placeholder="请选择事件类型">\n            <ion-option [value]="eventType.value" *ngFor="let eventType of eventTypes">{{eventType.text}}</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-list>\n      <ion-list>\n        <ion-item>\n          <ion-label>事件说明</ion-label>\n          <ion-textarea placeholder="事件必要的说明" rows=\'3\' [(ngModel)]="explain"></ion-textarea>\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-content>\n      <ion-list>\n        <ion-item-divider>图片信息</ion-item-divider>\n        <div class="image-list">\n          <div class="image-item" *ngFor="let picture of pictures">\n            <img [src]="picture" />\n            <span class="del" (click)="delImg(picture)">\n              <!-- <div class="fa fa-times-circle"></div> -->\n              <ion-icon ios="ios-remove-circle" md="md-remove-circle" color="dark"></ion-icon>\n            </span>\n          </div>\n          <div class="image-item" (click)="showActionSheet()">\n            <img [src]="\'assets/imgs/iconfont-tianjia.png\'" />\n\n          </div>\n        </div>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-content>\n      <ion-list>\n        <ion-item-divider>音频信息</ion-item-divider>\n        <div class="data-item" *ngFor="let audio of audios" (click)="playRecord(audio)">\n          <ion-row style="width:100%">\n            <ion-col col-10 style="line-height:2.1em">{{audio}}</ion-col>\n            <ion-col col-2>\n              <button ion-button small full color="danger" (click)="deleteAudio($event,audio)">\n                删除\n              </button>\n            </ion-col>\n          </ion-row>\n        </div>\n        <div class="data-item">\n          <button ion-button small full color="primary" (click)="showAudioRecord()">\n            开始录音\n          </button>\n        </div>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n  <div style="text-align: center; margin-top:30px;padding:15px">\n    <button ion-button default full color="primary" (click)="postEvent($event)">\n      事件上报\n    </button>\n  </div>\n</ion-content>'/*ion-inline-end:"D:\Projects\Cordova\Zhsq\src\pages\present-event\present-event.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
    ], PresentEventPage);
    return PresentEventPage;
}());

//# sourceMappingURL=present-event.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PersonListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PersonListPage = (function () {
    function PersonListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PersonListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PersonListPage');
    };
    PersonListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-person-list',template:/*ion-inline-start:"D:\Projects\Cordova\Zhsq\src\pages\person-list\person-list.html"*/'<!--\n  Generated template for the PersonListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>居民信息</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content style="padding:5px">\n    <ion-searchbar\n    [(ngModel)]="searchText"\n    [showCancelButton]="shouldShowCancel" placeholder="搜索">\n  </ion-searchbar>\n</ion-content>\n'/*ion-inline-end:"D:\Projects\Cordova\Zhsq\src\pages\person-list\person-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], PersonListPage);
    return PersonListPage;
}());

//# sourceMappingURL=person-list.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the RoomListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RoomListPage = (function () {
    function RoomListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RoomListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RoomListPage');
    };
    RoomListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-room-list',template:/*ion-inline-start:"D:\Projects\Cordova\Zhsq\src\pages\room-list\room-list.html"*/'<!--\n  Generated template for the RoomListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>房屋信息</ion-title>\n    <ion-buttons end>\n        <button ion-button icon-only >\n          <ion-icon name="add-circle"></ion-icon>\n        </button>\n      </ion-buttons>\n  </ion-navbar>\n  \n</ion-header>\n\n\n<ion-content style="padding:5px">\n    <ion-searchbar\n    [(ngModel)]="searchText"\n    [showCancelButton]="shouldShowCancel" placeholder="搜索">\n  </ion-searchbar>\n</ion-content>\n'/*ion-inline-end:"D:\Projects\Cordova\Zhsq\src\pages\room-list\room-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], RoomListPage);
    return RoomListPage;
}());

//# sourceMappingURL=room-list.js.map

/***/ }),

/***/ 133:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 133;

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppConfig; });
var AppConfig = (function () {
    function AppConfig() {
    }
    AppConfig.getBaseMapAddress = function () {
        return this.baseMapAddress;
    };
    AppConfig.setBaseMapAddress = function (url) {
        this.baseMapAddress = url;
    };
    //public static appUrl:string="/app";  
    //public static appUrl: string = "http://192.168.1.105:61186";//"http://zhsq.cqmap.com/gxc";
    AppConfig.appUrl = "http://zhsq.cqmap.com/syl";
    AppConfig.online = true;
    return AppConfig;
}());

//# sourceMappingURL=app.config.js.map

/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/audio/audio.module": [
		309,
		11
	],
	"../pages/car-list/car-list.module": [
		310,
		10
	],
	"../pages/deal-event/deal-event.module": [
		311,
		9
	],
	"../pages/detail-event/detail-event.module": [
		312,
		8
	],
	"../pages/event-list/event-list.module": [
		313,
		7
	],
	"../pages/home/home.module": [
		314,
		6
	],
	"../pages/login/login.module": [
		315,
		5
	],
	"../pages/my-event/my-event.module": [
		316,
		4
	],
	"../pages/person-list/person-list.module": [
		317,
		3
	],
	"../pages/picture/picture.module": [
		318,
		2
	],
	"../pages/present-event/present-event.module": [
		319,
		1
	],
	"../pages/room-list/room-list.module": [
		320,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 175;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__my_event_my_event__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__present_event_present_event__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__event_list_event_list__ = __webpack_require__(113);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var EventPage = (function () {
    function EventPage(navCtrl, camera, actionSheetCtrl, http) {
        this.navCtrl = navCtrl;
        this.camera = camera;
        this.actionSheetCtrl = actionSheetCtrl;
        this.http = http;
        this.departments = [];
    }
    EventPage.prototype.goto = function (type) {
        if (type == "presentEvent") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__present_event_present_event__["a" /* PresentEventPage */]);
        }
        else if (type == "myEvent") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__my_event_my_event__["a" /* MyEventPage */]);
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__event_list_event_list__["a" /* EventListPage */]);
        }
    };
    EventPage.prototype.getPicture = function () {
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            //let base64Image = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            // Handle error
        });
    };
    EventPage.prototype.clickme = function (event) {
        this.http.post("http://192.168.1.105:43911/Enterprise/GetGridJson", JSON.stringify({
            limit: 10,
            offset: 0
        })).subscribe(function (data) {
            console.log(data);
        });
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Modify your album',
            buttons: [
                {
                    text: 'Destructive',
                    role: 'destructive',
                    handler: function () {
                        console.log('Destructive clicked');
                    }
                },
                {
                    text: 'Archive',
                    handler: function () {
                        console.log('Archive clicked');
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    EventPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-event',template:/*ion-inline-start:"D:\Projects\Cordova\Zhsq\src\pages\event\event.html"*/'<ion-header>\n  <ion-navbar>\n      <button ion-button icon-only menuToggle>\n          <ion-icon name="menu"></ion-icon>\n      </button>\n    <ion-title>\n      事件\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n <!-- <button ion-button large (click)="clickme($event)">\n   点我\n  </button>\n  <button ion-button large (click)="getPicture($event)">\n      照相机\n  </button>-->\n  <ion-item (click)="goto(\'presentEvent\')">\n      <button ion-button block color="light" large>\n          <ion-icon ios="ios-add-circle" md="md-add-circle"></ion-icon>\n          事件上报\n        </button>\n  </ion-item>\n  <ion-item (click)="goto(\'myEvent\')">\n      <button ion-button block color="light" large>\n          <ion-icon ios="ios-information-circle" md="md-information-circle"></ion-icon>\n          我的事件\n        </button>\n  </ion-item>\n  <ion-item (click)="goto(\'dealEvent\')">\n      <button ion-button block color="light" large>\n          <ion-icon name="create"></ion-icon>\n          事件处理\n        </button>\n  </ion-item>\n  <img>\n</ion-content>\n'/*ion-inline-end:"D:\Projects\Cordova\Zhsq\src\pages\event\event.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], EventPage);
    return EventPage;
}());

//# sourceMappingURL=event.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__person_list_person_list__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__room_list_room_list__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__car_list_car_list__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage.prototype.goto = function (type) {
        if (type == "room") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__room_list_room_list__["a" /* RoomListPage */]);
        }
        else if (type == "car") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__car_list_car_list__["a" /* CarListPage */]);
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__person_list_person_list__["a" /* PersonListPage */]);
        }
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"D:\Projects\Cordova\Zhsq\src\pages\contact\contact.html"*/'<ion-header>\n  <ion-navbar>\n      <button ion-button icon-only menuToggle>\n          <ion-icon name="menu"></ion-icon>\n      </button>\n    <ion-title>\n      入户走访\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-item (click)="goto(\'people\')">\n        <button ion-button block color="light" large>\n            <ion-icon  ios="ios-people" md="md-people"></ion-icon>\n            居民信息\n          </button>\n    </ion-item>\n    <ion-item (click)="goto(\'room\')">\n        <button ion-button block color="light" large>\n            <ion-icon ios="ios-home" md="md-home"></ion-icon>\n            房屋信息\n          </button>\n    </ion-item>\n    <ion-item (click)="goto(\'car\')">\n        <button ion-button block color="light" large>\n            <ion-icon  ios="ios-car" md="md-car"></ion-icon>\n            车辆管理\n          </button>\n    </ion-item>\n</ion-content>\n'/*ion-inline-end:"D:\Projects\Cordova\Zhsq\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppUpdateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_config__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_opener__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AppUpdateService = (function () {
    function AppUpdateService(toastCtrl, http, alertCtrl, loadingCtrl, fileTransfer, file, fileOpener) {
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.fileTransfer = fileTransfer;
        this.file = file;
        this.fileOpener = fileOpener;
    }
    AppUpdateService.prototype.checkUpdate = function (oldVersion) {
        var _this = this;
        this.http.post(__WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* AppConfig */].appUrl + "/Dcqtech.App/App/CheckUpdate", {}, {}).subscribe(function (res) {
            //读取新版本号
            var newVer = res.Response.VersionNum;
            newVer = newVer.split(',').join("");
            if (oldVersion && newVer && (parseInt(newVer) > parseInt(oldVersion))) {
                console.log("最新版本2:" + newVer);
                _this.alertCtrl.create({
                    title: '版本更新',
                    message: '发现最新版本为' + res.Response.VersionNum + ', 是否更新?',
                    buttons: [
                        {
                            text: '取消',
                            role: 'cancel',
                            handler: function () {
                                console.log('取消');
                            }
                        },
                        {
                            text: '更新',
                            handler: function () {
                                console.log('更新');
                                alert(res.Response.Url);
                                _this.loadAPP(res.Response.Url);
                            }
                        }
                    ]
                }).present();
            }
            else {
            }
        });
    };
    AppUpdateService.prototype.loadAPP = function (downloadUrl) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'ios',
            content: '安装包正在下载...',
            dismissOnPageChange: false
        });
        loading.present();
        // 下载 
        var fileTransferObject = this.fileTransfer.create();
        fileTransferObject.download(encodeURI(downloadUrl.replace("\\", "/")), this.file.externalDataDirectory + "zhsq.apk").then(function (entry) {
            loading.dismiss();
            _this.fileOpener.open(_this.file.externalDataDirectory + "zhsq.apk", 'application/vnd.android.package-archive').then(function () { });
        }, function (error) {
            alert(JSON.stringify(error));
            _this.toastCtrl.create({ message: "下载失败", duration: 1000 }).present();
            loading.dismiss();
        });
        // 进度
        fileTransferObject.onProgress(function (event) {
            //进度，这里使用文字显示下载百分比
            var downloadProgress = (event.loaded / event.total) * 100;
            loading.setContent("已经下载：" + Math.floor(downloadProgress) + "%");
            if (downloadProgress > 99) {
                loading.dismiss();
            }
        });
    };
    AppUpdateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_opener__["a" /* FileOpener */]])
    ], AppUpdateService);
    return AppUpdateService;
}());

//# sourceMappingURL=appupdate-service.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(247);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_event_event__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_department_service_department_service__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_user_service_user_service__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_geolocation__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_camera__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_file_transfer__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_file__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_media__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_login_login__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_my_event_my_event__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_car_list_car_list__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_deal_event_deal_event__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_present_event_present_event__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_person_list_person_list__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_room_list_room_list__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_audio_audio__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_event_list_event_list__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_detail_event_detail_event__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_http_service_http_service__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_app_version__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_app_update__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_file_opener__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_buttonback_service_buttonback_service__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__providers_appupdate_service_appupdate_service__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_picture_picture__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__ionic_native_network__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__ionic_native_background_geolocation__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__app_config__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





































//import { HTTP } from '@ionic-native/http';

var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_event_event__["a" /* EventPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_my_event_my_event__["a" /* MyEventPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_car_list_car_list__["a" /* CarListPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_deal_event_deal_event__["a" /* DealEventPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_present_event_present_event__["a" /* PresentEventPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_person_list_person_list__["a" /* PersonListPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_room_list_room_list__["a" /* RoomListPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_audio_audio__["a" /* AudioPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_event_list_event_list__["a" /* EventListPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_detail_event_detail_event__["a" /* DetailEventPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_picture_picture__["a" /* PicturePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/audio/audio.module#AudioPageModule', name: 'AudioPage', segment: 'audio', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/car-list/car-list.module#CarListPageModule', name: 'CarListPage', segment: 'car-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/deal-event/deal-event.module#DealEventPageModule', name: 'dealevent', segment: 'deal:EventId', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detail-event/detail-event.module#DetailEventPageModule', name: 'detailevent', segment: 'detail:id', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/event-list/event-list.module#EventListPageModule', name: 'EventListPage', segment: 'event-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my-event/my-event.module#MyEventPageModule', name: 'myevent', segment: 'myevent', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/person-list/person-list.module#PersonListPageModule', name: 'PersonListPage', segment: 'person-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/picture/picture.module#PicturePageModule', name: 'PicturePage', segment: 'picture', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/present-event/present-event.module#PresentEventPageModule', name: 'presentevent', segment: 'presentevent', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/room-list/room-list.module#RoomListPageModule', name: 'RoomListPage', segment: 'room-list', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_event_event__["a" /* EventPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_my_event_my_event__["a" /* MyEventPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_car_list_car_list__["a" /* CarListPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_deal_event_deal_event__["a" /* DealEventPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_present_event_present_event__["a" /* PresentEventPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_person_list_person_list__["a" /* PersonListPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_room_list_room_list__["a" /* RoomListPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_audio_audio__["a" /* AudioPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_event_list_event_list__["a" /* EventListPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_detail_event_detail_event__["a" /* DetailEventPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_picture_picture__["a" /* PicturePage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_37__app_config__["a" /* AppConfig */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_36__ionic_native_background_geolocation__["a" /* BackgroundGeolocation */],
                __WEBPACK_IMPORTED_MODULE_31__ionic_native_file_opener__["a" /* FileOpener */],
                __WEBPACK_IMPORTED_MODULE_29__ionic_native_app_version__["a" /* AppVersion */],
                __WEBPACK_IMPORTED_MODULE_30__ionic_native_app_update__["a" /* AppUpdate */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_media__["a" /* Media */],
                // HTTP,
                __WEBPACK_IMPORTED_MODULE_35__ionic_native_network__["a" /* Network */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__providers_department_service_department_service__["a" /* DepartmentServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_12__providers_user_service_user_service__["a" /* UserServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_28__providers_http_service_http_service__["a" /* HttpServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_32__providers_buttonback_service_buttonback_service__["a" /* BackButtonService */],
                __WEBPACK_IMPORTED_MODULE_33__providers_appupdate_service_appupdate_service__["a" /* AppUpdateService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_config__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_app_version__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_appupdate_service_appupdate_service__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_network__ = __webpack_require__(225);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, http, toastCtrl, appVersion, appupdateService, alertCtrl, network) {
        var _this = this;
        this.platform = platform;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.appVersion = appVersion;
        this.appupdateService = appupdateService;
        this.alertCtrl = alertCtrl;
        this.network = network;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */];
        this.isIos = false;
        if (!this.islogin()) {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        }
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            _this.addConnectEvent();
            if (!platform.is("ios")) {
                _this.isIos = false;
            }
            else if (platform.is("ios")) {
                _this.isIos = true;
            }
            _this.appVersion.getVersionNumber().then(function (value) {
                _this.versionNum = value;
                if (!_this.isIos) {
                    _this.appupdateService.checkUpdate(value);
                    //this.isIos=false;
                }
            });
            splashScreen.hide();
        });
    }
    MyApp.prototype.addConnectEvent = function () {
        var _this = this;
        this.disconnect = this.network.onDisconnect().subscribe(function () {
            __WEBPACK_IMPORTED_MODULE_6__app_config__["a" /* AppConfig */].online = false;
            _this.toast = _this.toastCtrl.create({ message: "网络已断开", cssClass: "toast-danger", position: 'top' });
            _this.toast.present();
        });
        this.connect = this.network.onConnect().subscribe(function () {
            __WEBPACK_IMPORTED_MODULE_6__app_config__["a" /* AppConfig */].online = true;
            if (_this.toast) {
                _this.toast.dismiss();
                _this.toastCtrl.create({ message: "网络已连接", cssClass: "toast-balance", position: 'top', duration: 1500 }).present();
            }
        });
    };
    MyApp.prototype.islogin = function () {
        var isLogin = window.localStorage.getItem("isLogin");
        var time = window.localStorage.getItem("time");
        var now = (new Date()).getTime();
        var baseAddress = window.localStorage.getItem('baseMapAddress');
        __WEBPACK_IMPORTED_MODULE_6__app_config__["a" /* AppConfig */].setBaseMapAddress(baseAddress);
        if (time) {
            var timeNo = Number(time);
            if ((now - timeNo) / (1000 * 60 * 60 * 24) < 7) {
                if (isLogin && isLogin == "login") {
                    return true;
                }
            }
        }
        return false;
    };
    MyApp.prototype.logOff = function () {
        var _this = this;
        this.alertCtrl.create({
            title: '提示',
            message: '是否确认退出?',
            buttons: [
                {
                    text: '取消',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: '确定',
                    handler: function () {
                        _this.http.post(__WEBPACK_IMPORTED_MODULE_6__app_config__["a" /* AppConfig */].appUrl + "/User/Account/LogOffForApp", {}, {}).subscribe(function (res) {
                            window.localStorage.clear();
                            _this.toastCtrl.create({ message: "退出成功", duration: 1000 }).present();
                            _this.platform.exitApp();
                        }, function (err) {
                            _this.toastCtrl.create({ message: '连接服务器失败', duration: 3000, position: 'top' }).present();
                            ;
                        });
                    }
                }
            ]
        }).present();
    };
    MyApp.prototype.menuOpen = function () {
        this.userName = window.localStorage.getItem("username");
        this.userPhoto = window.localStorage.getItem("userphoto");
        this.userCommunity = window.localStorage.getItem("usercommunity");
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Projects\Cordova\Zhsq\src\app\app.html"*/'<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n<ion-menu [content]="content" id="menu1" (ionOpen)="menuOpen()">\n\n    <!-- <ion-header>\n        <ion-toolbar>\n            <ion-title></ion-title>\n        </ion-toolbar>\n    </ion-header> -->\n\n    <ion-content padding>\n        <!-- <ion-list>\n            <button ion-item menuClose="menu1" detail-none>\n                Close Menu 1\n            </button>\n        </ion-list> -->\n        <div class="mui-content" style="margin-top:50px">\n            <div class="title"></div>\n            <div class="content">\n                <div align="center">\n                    <img id="userImg" [src]="userPhoto||\'assets/imgs/ic_launcher.png\'" style="width:100px; height:100px; border-radius:50%;-webkit-border-radius:50%;-moz-border-radius:50%;"/>\n                    <div id="userName">{{userName}}({{userCommunity}})</div>\n                </div>\n\n                <p style="margin: 10px 15px;">\n                    <!--<button id="close-btn" type="button" class="mui-btn mui-btn-danger mui-btn-block" style="padding: 5px 20px;">关闭侧滑菜单</button>-->\n                </p>\n\n            </div>\n            <!--//mui-table-view-chevron mui-table-view-inverted-->\n            <ion-list>\n                <button ion-item >事件统计</button>\n                <button ion-item >人口统计</button>\n            </ion-list>\n        </div>\n        <div class="mui-content-padded" style="height: 150px;"  *ngIf="!isIos">\n            <!-- <div class="mui-btn mui-btn-block mui-btn-red" id="logoff">安全退出</div> -->\n            <button ion-button full color="danger" (click)="logOff()">安全退出</button>\n        </div>\n        <div class="mui-content-padded" align="center">\n            <div id="versionNum" style="bottom: 20px;color: #ccc;">{{versionNum}}</div>\n        </div>\n    </ion-content>\n\n</ion-menu>'/*ion-inline-end:"D:\Projects\Cordova\Zhsq\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_app_version__["a" /* AppVersion */], __WEBPACK_IMPORTED_MODULE_9__providers_appupdate_service_appupdate_service__["a" /* AppUpdateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_network__["a" /* Network */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DepartmentServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the DepartmentServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DepartmentServiceProvider = (function () {
    function DepartmentServiceProvider(http) {
        this.http = http;
        console.log('Hello DepartmentServiceProvider Provider');
    }
    DepartmentServiceProvider.prototype.getDepartments = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post("http://192.168.1.105:43911/Enterprise/GetGridJson", JSON.stringify({
                limit: 10,
                offset: 0
            }));
        });
    };
    DepartmentServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], DepartmentServiceProvider);
    return DepartmentServiceProvider;
}());

//# sourceMappingURL=department-service.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UserServiceProvider = (function () {
    function UserServiceProvider(http) {
        this.http = http;
        console.log('Hello UserServiceProvider Provider');
    }
    UserServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], UserServiceProvider);
    return UserServiceProvider;
}());

//# sourceMappingURL=user-service.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_config__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the HttpServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var HttpServiceProvider = (function () {
    function HttpServiceProvider(http) {
        this.http = http;
        console.log('Hello HttpServiceProvider Provider');
        this.rootUrl = __WEBPACK_IMPORTED_MODULE_2__app_app_config__["a" /* AppConfig */].appUrl;
    }
    HttpServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], HttpServiceProvider);
    return HttpServiceProvider;
}());

//# sourceMappingURL=http-service.js.map

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AudioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_media__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the AudioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AudioPage = (function () {
    function AudioPage(platform, navCtrl, navParams, media, file, viewCtrl) {
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.media = media;
        this.file = file;
        this.viewCtrl = viewCtrl;
        this.isRecord = navParams.get("type") == "record";
        this.filePath = navParams.get("path");
        this.rtimeText = '00:00:00';
        this.ptimeText = "00:00:00/00:00:00";
        this.length = 90;
        if (this.filePath) {
            if (this.filePath.indexOf('|') > -1) {
                this.showStop = true;
            }
            else {
                this.showStop = false;
            }
        }
        if (this.isRecord) {
            this.startRecord();
        }
        else {
            this.playRecord();
        }
    }
    AudioPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AudioPage');
    };
    AudioPage.prototype.stopRecord = function () {
        this.rtimeText = '00:00:00';
        clearInterval(this.ri);
        this.ri = null;
        this.recorder.stopRecord();
        var data = { 'fileName': this.filePath.substr(this.filePath.lastIndexOf('/') + 1) };
        this.recorder.release();
        this.viewCtrl.dismiss(data);
        this.filePath = null;
    };
    AudioPage.prototype.playRecord = function () {
        if (this.filePath.indexOf("|") > -1) {
            this.recorder = null;
            this.ptimeText = "";
            return;
            //this.recorder = this.media.create(this.filePath);
        }
        else {
            //this.filePath= this.file.externalDataDirectory + this.filePath
            if (this.platform.is("android")) {
                this.recorder = this.media.create(this.file.externalDataDirectory + this.filePath);
            }
            else if (this.platform.is("ios")) {
                this.recorder = this.media.create(this.file.tempDirectory.replace(/^file:\/\//, '') + this.filePath);
            }
        }
        var duration = this.recorder.getDuration();
        this.ptimeText = "00:00:00/" + this.timeToStr(duration);
        this.recorder.play();
        var self = this;
        this.ri = setInterval(function () {
            if (duration == -1) {
                duration = self.recorder.getDuration();
            }
            self.recorder.getCurrentPosition().then(function (position) {
                if (position < 0) {
                    clearInterval(self.ri);
                    self.ri = null;
                    self.playStop();
                    return;
                }
                self.ptimeText = self.timeToStr(position) + "/" + self.timeToStr(duration);
            });
        }, 1000);
    };
    AudioPage.prototype.playStop = function () {
        if (this.recorder) {
            this.recorder.stop();
            this.recorder.release();
        }
        this.viewCtrl.dismiss();
    };
    ///开始录音
    AudioPage.prototype.startRecord = function () {
        if (!this.filePath) {
            if (this.platform.is("android"))
                this.filePath = this.file.externalDataDirectory + this.createFileName() + ".mp3";
            else if (this.platform.is("ios")) {
                this.filePath = this.file.tempDirectory + this.createFileName() + ".m4a";
            }
        }
        this.recorder = this.media.create(this.filePath);
        this.recorder.startRecord();
        var t = 0;
        var self = this;
        this.ri = setInterval(function () {
            t++;
            self.rtimeText = self.timeToStr(t);
        }, 1000);
    };
    AudioPage.prototype.createFileName = function () {
        var Dates = new Date();
        var year = Dates.getFullYear();
        var month = (Dates.getMonth() + 1) < 10 ? '0' + (Dates.getMonth() + 1) : (Dates.getMonth() + 1);
        var day = Dates.getDate() < 10 ? '0' + Dates.getDate() : Dates.getDate();
        var hour = Dates.getHours() < 10 ? '0' + Dates.getHours() : Dates.getHours();
        var minute = Dates.getMinutes() < 10 ? '0' + Dates.getMinutes() : Dates.getMinutes();
        var second = Dates.getSeconds() < 10 ? '0' + Dates.getSeconds() : Dates.getSeconds();
        var dateStr = year + "" + month + "" + day + "" + hour + "" + minute + "" + second;
        return dateStr;
    };
    AudioPage.prototype.timeToStr = function (ts) {
        var h = parseInt(String(ts / 3600));
        var m = parseInt(String((ts % 3600) / 60));
        var s = parseInt(String(ts % 60));
        return (this.ultZeroize(h) + ":" + this.ultZeroize(m) + ":" + this.ultZeroize(s));
    };
    AudioPage.prototype.ultZeroize = function (v) {
        var s = "";
        if (v < 10) {
            s = "0" + v;
        }
        else {
            s = v + "";
        }
        return s;
    };
    AudioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-audio',template:/*ion-inline-start:"D:\Projects\Cordova\Zhsq\src\pages\audio\audio.html"*/'<!--\n  Generated template for the AudioPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content>\n  <div id="play" class="rp" *ngIf="!isRecord">\n    <!-- <div id="ptime" class="ptime">{{ptimeText}}</div> -->\n    <div id="ptime" class="ptime">{{ptimeText}}</div> \n    <br/>\n    <div id="progress" class="progress">\n      <!-- <div id="schedule" class="schedule" [ngStyle]="{\'width\':\'80px\'}"></div> -->\n      <audio src="{{filePath}}" preload="meta" controls autoplay *ngIf="showStop"></audio>\n    </div>\n    <br/>\n     <div class="stop" (click)="playStop()" ></div>\n  </div>\n  <div id="record" class="rp" *ngIf="isRecord">\n    <div style="width:100%;height:20%;"></div>\n    <div class="rprogress">\n      <div class="rschedule"></div>\n    </div>\n    <br/>\n    <div #rtime class="rtime">{{rtimeText}}</div>\n    <br/>\n    <div class="stop" (click)="stopRecord()"></div>\n  </div>\n</ion-content>'/*ion-inline-end:"D:\Projects\Cordova\Zhsq\src\pages\audio\audio.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_media__["a" /* Media */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], AudioPage);
    return AudioPage;
}());

//# sourceMappingURL=audio.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailEventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_config__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__deal_event_deal_event__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__audio_audio__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__picture_picture__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailEventPage = (function () {
    function DetailEventPage(navCtrl, navParams, http, domSanitizer, toastCtrl, loadCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.domSanitizer = domSanitizer;
        this.toastCtrl = toastCtrl;
        this.loadCtrl = loadCtrl;
        this.modalCtrl = modalCtrl;
        this.eventResultList = [];
        this.event = this.navParams.get("event");
        this.appUrl = __WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* AppConfig */].appUrl;
    }
    DetailEventPage_1 = DetailEventPage;
    DetailEventPage.prototype.ionViewWillEnter = function () {
        this.getEventResultList();
    };
    DetailEventPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailPage');
    };
    DetailEventPage.prototype.getEventResultList = function () {
        var _this = this;
        this.http.post(__WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* AppConfig */].appUrl + "/Dcqtech.App/App/EventResultList", { eventId: this.event["Id"] }, {}).subscribe(function (res) {
            if (res["Success"]) {
                _this.eventResultList = res["Response"].reverse();
            }
        }, function (err) {
        });
    };
    DetailEventPage.prototype.playAudio = function (url) {
        var model = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__audio_audio__["a" /* AudioPage */], { type: "play", path: url });
        model.present();
    };
    DetailEventPage.prototype.showImg = function (urls) {
        // let model = this.modalCtrl.create(PicturePage, { urlNames: urls });
        // model.present();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__picture_picture__["a" /* PicturePage */], { urlNames: urls });
    };
    DetailEventPage.prototype.assembleHTML = function (eventResult) {
        var html = '[' + eventResult.Type + ']' + eventResult.Remark;
        return this.domSanitizer.bypassSecurityTrustHtml(html);
    };
    /**
     * dealWith(eventResult)
     */
    DetailEventPage.prototype.dealWith = function () {
        var _this = this;
        if (this.event["Type"] === '上报' || this.event["Type"] === '待接手' || this.event["Type"] === '驳回') {
            var loading_1 = this.loadCtrl.create({
                spinner: 'ios',
                content: '事件领取中，请稍候...',
                dismissOnPageChange: false
            });
            loading_1.present();
            var jsondata = {
                eventId: this.event["Id"],
                HType: 2003,
                NextUser_ID: 0,
                Detail: "",
                NeedAuditing: false
            };
            this.http.post(__WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* AppConfig */].appUrl + "/Dcqtech.Affairs/Admin/EventResultsAction", jsondata, {}).subscribe(function (res) {
                loading_1.dismiss();
                var toast = _this.toastCtrl.create({
                    message: "事件领取成功",
                    duration: 1000
                });
                if (!res["Status"]) {
                    toast.setMessage(res["Message"]);
                    toast.present();
                    return;
                }
                toast.present();
                //this.navCtrl.pop();
                _this.event["Type"] = "处理中";
                _this.navCtrl.push(DetailEventPage_1, { event: _this.event });
            }, function (err) {
                var toast = _this.toastCtrl.create({
                    message: err.message,
                    duration: 1000
                });
                toast.present();
            });
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__deal_event_deal_event__["a" /* DealEventPage */], { EventId: this.event.Id });
        }
    };
    DetailEventPage = DetailEventPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detail-event',template:/*ion-inline-start:"D:\Projects\Cordova\Zhsq\src\pages\detail-event\detail-event.html"*/'<!--\n  Generated template for the DetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>事件详情</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <div class="item item-block item-md" style="padding-left:0px">\n    <label class="item-inner">上报信息：{{event.Info}}</label>\n  </div>\n  <div class="item item-block item-md" style="padding-left:0px">\n    <label class="item-inner">当前进度：{{event.Type}}</label>\n  </div>\n  <div class="item item-block item-md" style="padding-left:0px">\n    <label class="item-inner">事件类型：{{event.EventItemTypeName}}</label>\n  </div>\n  <div class="item item-block item-md" style="padding-left:0px">\n    <label class="item-inner">事件地址：{{event.Address}}</label>\n  </div>\n\n  <div class="item item-block item-md" style="background:#f4f4f4;padding-left:0px">\n    <div id="cd-timeline" class="cd-container">\n      <div class="cd-timeline-block" *ngFor="let eventResult of eventResultList;let i = index">\n        <div class="cd-timeline-img cd-picture" [ngStyle]="{\'background-color\':i==0?\'#75ce66\':\'#CCCCCC\'}"></div>\n        <div class="cd-timeline-content">\n          <!-- <h5 style="font-size:15px">{{\'[\'+eventResult.Type +\']\'+eventResult.Remark}}</h5> -->\n          <h5 style="font-size:15px" [innerHTML]="assembleHTML(eventResult)"></h5>\n          <p style="font-size:15px">{{eventResult.Detail}}</p>\n\n          <div class="image-list" *ngIf="eventResult.UrlNames&&eventResult.UrlNames!=\'\'">\n            <div class="image-item" *ngFor="let url of eventResult.UrlNames.split(\',\')">\n              <img [src]="appUrl+\'/Admin/Affairs/WorkFiles/Get/\'+url.split(\'/\').join(\'|\')" *ngIf="url.indexOf(\'.mp3\')<0" (click)="showImg(eventResult.UrlNames)">\n              <img [src]="\'assets/imgs/voice.jpg\'" *ngIf="url.indexOf(\'.mp3\')>-1" (click)="playAudio(appUrl+\'/User/Affairs/WorkFiles/Get/\'+url.split(\'/\').join(\'|\'))">\n            </div>\n          </div>\n          <a id="cd-read-more" class="disable-hover button button-md button-default button-default-md button-small button-small-md"\n            (click)="dealWith(eventResult)" style="float:right;line-height: 2.1em" *ngIf=" i==0&&(eventResult.Type != \'提交审核\' && eventResult.Type != \'审核通过\')">{{(eventResult["Type"] === \'上报\' ||eventResult["Type"] === \'待接手\' ||eventResult["Type"]=== \'驳回\')?"领取":"处理"}}</a>\n          <span style="font-size:15px" class="cd-date">{{eventResult.Date}}</span>\n        </div>\n\n\n      </div>\n    </div>\n  </div>\n\n</ion-content>'/*ion-inline-end:"D:\Projects\Cordova\Zhsq\src\pages\detail-event\detail-event.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
    ], DetailEventPage);
    return DetailEventPage;
    var DetailEventPage_1;
}());

//# sourceMappingURL=detail-event.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackButtonService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_audio_audio__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BackButtonService = (function () {
    //构造函数 依赖注入
    function BackButtonService(platform, keyboard, appCtrl, toastCtrl) {
        this.platform = platform;
        this.keyboard = keyboard;
        this.appCtrl = appCtrl;
        this.toastCtrl = toastCtrl;
        //控制硬件返回按钮是否触发，默认false
        this.backButtonPressed = false;
    }
    //注册方法
    BackButtonService.prototype.registerBackButtonAction = function (tabRef) {
        //registerBackButtonAction是系统自带的方法
        var _this = this;
        this.platform.registerBackButtonAction(function () {
            if (_this.keyboard.isOpen()) {
                _this.keyboard.close();
                return;
            }
            //控制modal、系统自带提示框
            var overlay = _this.appCtrl._appRoot._overlayPortal.getActive() || _this.appCtrl._appRoot._modalPortal.getActive();
            if (overlay) {
                var page = overlay.instance;
                if (page instanceof __WEBPACK_IMPORTED_MODULE_2__pages_audio_audio__["a" /* AudioPage */]) {
                    if (page.isRecord) {
                        page.stopRecord();
                    }
                    else {
                        page.playStop();
                    }
                    return;
                }
                else {
                    overlay.dismiss();
                }
                return;
            }
            //获取NavController
            var activeNav = _this.appCtrl.getActiveNav();
            //如果可以返回上一页，则执行pop
            if (activeNav.canGoBack()) {
                activeNav.pop();
            }
            else {
                if (tabRef == null || tabRef._selectHistory[tabRef._selectHistory.length - 1] === tabRef.getByIndex(0).id) {
                    //执行退出
                    _this.showExit();
                }
                else {
                    //选择首页第一个的标签
                    tabRef.select(0);
                }
            }
        });
    };
    //退出应用方法
    BackButtonService.prototype.showExit = function () {
        var _this = this;
        //如果为true，退出
        if (this.backButtonPressed) {
            this.platform.exitApp();
        }
        else {
            //第一次按，弹出Toast
            this.toastCtrl.create({
                message: '再按一次退出应用',
                duration: 2000,
                position: 'top'
            }).present();
            //标记为true
            this.backButtonPressed = true;
            //两秒后标记为false，如果退出的话，就不会执行了
            setTimeout(function () { return _this.backButtonPressed = false; }, 2000);
        }
    };
    BackButtonService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]])
    ], BackButtonService);
    return BackButtonService;
}());

//# sourceMappingURL=buttonback-service.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__event_event__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_buttonback_service_buttonback_service__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = (function () {
    function TabsPage(platform, backButtonService) {
        var _this = this;
        this.backButtonService = backButtonService;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__event_event__["a" /* EventPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
        this.backButtonPressed = false;
        platform.ready().then(function () {
            _this.backButtonService.registerBackButtonAction(_this.tabRef);
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
        });
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('myTabs'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["n" /* Tabs */])
    ], TabsPage.prototype, "tabRef", void 0);
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Projects\Cordova\Zhsq\src\pages\tabs\tabs.html"*/'<ion-tabs  #myTabs>\n  <ion-tab [root]="tab1Root" tabTitle="巡检" tabIcon="home" tabUrlPath="map"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="事件" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="入户走访" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"D:\Projects\Cordova\Zhsq\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_4__providers_buttonback_service_buttonback_service__["a" /* BackButtonService */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ })

},[226]);
//# sourceMappingURL=main.js.map