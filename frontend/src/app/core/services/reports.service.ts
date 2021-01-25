import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  constructor( private htttp: HttpClient) { }

  ConfigUrl = 'https://api.backmerchants.bancoink.biz/qa';
  getAllUsers(){
    let header = new HttpHeaders().set('apikey','252156');
    let params1 = new HttpParams().set('apiKey','252156');

    //this.htttp.get<any>(this.ConfigUrl+'/pockets/reports/transactions/purchases',{params:params1});
    return this.htttp.get<any>(
      this.ConfigUrl+'/pockets/reports/transactions/purchases',
      {headers:header.set('Content-Type', 'application/json')}
      );

  }

  getUsers(){
    let list = [];
    for( let index = 0 ; index < 100; index++){
      if(index >= 50){
        list.push(
          {
            nombre: "usuario",
            cel: "123456789",
            email:"correo@gmail.com", 
            fecha_de_compra:"11/03/2020",
            edad:"24"
          });
      }else{
        list.push(
          {
            nombre: "Usuarios 1",
            cel: "00211414",
            email:"correonuevo@gmail.com", 
            fecha_de_compra:"11/03/2020",
            edad:"15"
          });
      }  
     
    }
    return list;
  }
}
