import { Injectable } from '@angular/core';
import { Http , Headers , RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

let apiUrl = "https://braziliandev.000webhostapp.com/PHP-Slim-Restful/api/";
//let apiUrl = "http://localhost/PHP-Slim-Restful/api/";
/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/


@Injectable()
export class LoginProvider {
  
  constructor(public http: Http) {
    console.log('hello world')
  }
  
  postData(credentials, type){

    return new Promise((resolve, reject) =>{
      let headers = new Headers();
      this.http.post(apiUrl+type, JSON.stringify(credentials),{headers: headers}).
        subscribe(res =>{
          resolve(res.json());
        },(err) => {
          reject(err);
        });
        

      

    });
  }
  


}
