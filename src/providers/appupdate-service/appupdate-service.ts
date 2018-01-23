import { Injectable } from '@angular/core';
import { ToastController, AlertController, LoadingController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../../app/app.config';
import { File } from '@ionic-native/file';
import { FileOpener } from '@ionic-native/file-opener';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
@Injectable()
export class AppUpdateService {
    constructor(private toastCtrl: ToastController, private http: HttpClient, private alertCtrl: AlertController, private loadingCtrl: LoadingController,
        private fileTransfer: FileTransfer, private file: File, private fileOpener: FileOpener) {

    }
    public checkUpdate(oldVersion) {
        this.http.post(AppConfig.appUrl + "/Dcqtech.App/App/CheckUpdate", {}, {}).subscribe((res: any) => {
            //读取新版本号
            let newVer: string = res.Response.VersionNum;
            newVer = newVer.split(',').join("");
            if (oldVersion && newVer && (parseInt(newVer) > parseInt(oldVersion))) {
                console.log("最新版本2:" + newVer);
                this.alertCtrl.create({
                    title: '版本更新',
                    message: '发现最新版本为' + res.Response.VersionNum + ', 是否更新?',
                    buttons: [
                        {
                            text: '取消',
                            role: 'cancel',
                            handler: () => {
                                console.log('取消');
                            }
                        },
                        {
                            text: '更新',
                            handler: () => {
                                console.log('更新');
                                alert(res.Response.Url);
                                this.loadAPP(res.Response.Url);
                            }
                        }
                    ]
                }).present();
            } else {
               
            }
        })
    }
    private loadAPP(downloadUrl) {
        let loading = this.loadingCtrl.create({
            spinner: 'ios',
            content: '安装包正在下载...',
            dismissOnPageChange: false
        });
        loading.present();
        // 下载 
        let fileTransferObject: FileTransferObject = this.fileTransfer.create();
        fileTransferObject.download(encodeURI(downloadUrl.replace("\\","/")), this.file.externalDataDirectory + "zhsq.apk").then((entry) => {
            loading.dismiss();
            this.fileOpener.open(this.file.externalDataDirectory + "zhsq.apk", 'application/vnd.android.package-archive').then(() => { });
        }, (error) => {
            alert(JSON.stringify(error));
            this.toastCtrl.create({ message: "下载失败", duration: 1000 }).present();
            loading.dismiss();
        });
        // 进度
        fileTransferObject.onProgress((event) => {
            //进度，这里使用文字显示下载百分比
            var downloadProgress = (event.loaded / event.total) * 100;
            loading.setContent("已经下载：" + Math.floor(downloadProgress) + "%");
            if (downloadProgress > 99) {
                loading.dismiss();
            }
        });
    }
}