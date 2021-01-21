import { Component, OnInit } from '@angular/core';
import { Usermodel } from 'src/app/core/models/usermodel';
import { ReportsService } from 'src/app/core/services/reports.service';

import {FormControl, FormGroup} from '@angular/forms';

interface Food {
  value: string;
  viewValue: string;
}



@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})


export class ReportsComponent implements OnInit  {
    public page = 1;
    public pageSize = 10;
    public userList: Array<Usermodel> = [];

    range:FormGroup;
    form: FormGroup;

  foods: Food[] = [
    {value: 'nombre', viewValue: 'Nombre'},
    {value: 'cel', viewValue: 'Cel'},
    {value: 'email', viewValue: 'Email'},
    {value: 'fecha_de_compra', viewValue: 'Fecha de compra'},
    {value: 'edad', viewValue: 'Edad'}
  ];
  foodControl = new FormControl();
  searchControl= new FormControl();

  constructor( private reportsService: ReportsService ) { 
    this.form = new FormGroup({
      food: this.foodControl,
      search: this.searchControl,
    });

    this.range = new FormGroup({
      start: new FormControl(),
      end: new FormControl()
    });
  }

  ngOnInit(): void {
    this.userList = this.reportsService.getUsers()
  }
 
}





