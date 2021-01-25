import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Payload } from './../models/payload';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private http: HttpClient) { }
  ConfigUrl = 'https://api.backmerchants.bancoink.biz/qa';

  login(user_data : Payload ){
    let params = new HttpParams().append('apiKey','252156');
    console.log("parametros => ",params.toString());
    return this.http.post<Payload>(this.ConfigUrl+'/login',user_data,{params});
  }

}
