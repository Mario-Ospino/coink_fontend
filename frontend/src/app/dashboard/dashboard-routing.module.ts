import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavegationComponent } from './navegation/navegation.component';
import { ReportsComponent } from './../dashboard/components/reports/reports.component';


const routes: Routes = [
  {
    path: '',
    component: NavegationComponent,
    children: [
     
      {
        path:'reportes',
        component: ReportsComponent
      },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
