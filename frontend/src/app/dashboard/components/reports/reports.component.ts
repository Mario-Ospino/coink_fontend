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


    form: FormGroup;
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  foodControl = new FormControl();
  searchControl= new FormControl();
  constructor( private reportsService: ReportsService ) { 
    this.form = new FormGroup({
      food: this.foodControl,
      search: this.searchControl
    
    });
  }

  ngOnInit(): void {
    this.userList = this.reportsService.getUsers()
  }
 
}





