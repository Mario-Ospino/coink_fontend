import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';




import { MaterialModule } from '../material/material.module';
import { CoreModule } from '../core/core.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ReportsComponent } from './components/reports/reports.component';
import { NavegationComponent } from './navegation/navegation.component';

import { BootstrapModule } from './../bootstrap/bootstrap.module';



@NgModule({
  declarations: [ NavegationComponent, ReportsComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    CoreModule,
    BootstrapModule
  
    
   
  ]
})
export class DashboardModule { }
