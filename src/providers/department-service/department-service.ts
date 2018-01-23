import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
/*
  Generated class for the DepartmentServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DepartmentServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello DepartmentServiceProvider Provider');
  }
  getDepartments(){
    return  new Promise((resolve, reject)=>{
      this.http.post("http://192.168.1.105:43911/Enterprise/GetGridJson",JSON.stringify({
        limit:10,
        offset:0
      }));
    })
   
  }
}
