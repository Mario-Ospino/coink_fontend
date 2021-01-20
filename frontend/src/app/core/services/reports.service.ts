import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  constructor() { }

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
