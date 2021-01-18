import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavegationComponent } from './navegation/navegation.component';
import { DashboardComponent } from './../dashboard/components/dashboard/dashboard.component';


const routes: Routes = [
  {
    path: '',
    component: NavegationComponent,
    children: [
     
      {
        path:'dashboard',
        component: DashboardComponent
      },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
