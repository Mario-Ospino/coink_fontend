import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

//interfaces
import { Reportmodel } from './../../../core/models/reportmodel';
import { Usermodel } from 'src/app/core/models/usermodel';

//services
import { ReportsService } from 'src/app/core/services/reports.service';



@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})


export class ReportsComponent implements OnInit  {
    public page = 1;
    public pageSize = 10;
    public userList: Array<Usermodel> = [];
    public userNewList: Array<any> = [];

    range:FormGroup;
    form: FormGroup;

  reports: Reportmodel[] = [
    {value: 'nombre', viewValue: 'Nombre'},
    {value: 'cel', viewValue: 'Cel'},
    {value: 'email', viewValue: 'Email'},
    {value: 'fecha_de_compra', viewValue: 'Fecha de compra'},
    {value: 'edad', viewValue: 'Edad'}
  ];

  
  fieldControl = new FormControl();
  searchControl= new FormControl();

  constructor( private reportsService: ReportsService ) { 
    this.form = new FormGroup({
      field: this.fieldControl,
      search: this.searchControl,
    });

    this.range = new FormGroup({
      start: new FormControl(),
      end: new FormControl()
    });
  }

  ngOnInit(): void {
    this.userList = this.reportsService.getUsers();
    this.reportsService.getAllUsers().subscribe(
      data => {
          console.log("esto tiene data",data);
      },
      error => console.log("error",error)
    );
  }
 
}





