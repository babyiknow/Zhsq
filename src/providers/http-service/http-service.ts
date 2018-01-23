import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {AppConfig} from '../../app/app.config'

/*
  Generated class for the HttpServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpServiceProvider {
  rootUrl:string;
  constructor(public http: HttpClient) {
    console.log('Hello HttpServiceProvider Provider');
    this.rootUrl=AppConfig.appUrl;
  }
  
}
