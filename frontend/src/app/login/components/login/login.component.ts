import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

//services
import { CryptoService } from './../../../core/services/crypto.service';
import {LoginService } from './../../../core/services/login.service';

//models
import { Payload } from './../../../core/models/payload';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private cryptoService : CryptoService , 
    private loginService : LoginService ) {
    this.buildForm();
   }
  formGroup : FormGroup;

  userControl = new FormControl();
  passwordControl = new FormControl();

  private buildForm(){
    this.formGroup = new FormGroup({
      user_mail : this.userControl,
      user_password : this.passwordControl
    });
  }

  private data : Payload;
 
  saveFormGroup(){
    let mensaje = {"payload":"E5F87cL9nP4N8s7qya3gEUOZGf5wvwZs0rpHjcj6gBjlI0Yzn/K+6piDFjGada7jg6waKdqkXnC9RWIGPm7UGhYZmVhfgqelm9iPl3htpK0="}

    this.loginService.login(mensaje).subscribe(resp =>{
      console.log("respuesta del servidor", resp);
    }, error => {

      console.log("hubo un error", error);
    }
    
    );
    
    //console.log("valores form", this.formGroup.value);

  }
  ngOnInit(): void {
  }

}
