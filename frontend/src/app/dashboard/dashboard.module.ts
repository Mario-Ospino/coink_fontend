import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//components

//services 

//modules
import { MaterialModule } from '../material/material.module';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ReportsComponent } from './components/reports/reports.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { NavegationComponent } from './navegation/navegation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';



@NgModule({
  declarations: [ NavegationComponent, ReportsComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
   
  ]
})
export class DashboardModule { }
