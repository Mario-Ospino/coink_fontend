import { Component, OnInit } from '@angular/core';
import { Usermodel } from 'src/app/core/models/usermodel';
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
  constructor( private reportsService: ReportsService ) { }

  ngOnInit(): void {
    this.userList = this.reportsService.getUsers()
  }
 
}





