import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerificationRoutingModule } from './verification-routing.module';
import { VerificationComponent } from './components/verification/verification.component';

import { MaterialModule } from './../material/material.module';
import {SharedModule } from './../shared/shared.module';

@NgModule({
  declarations: [VerificationComponent],
  imports: [
    CommonModule,
    VerificationRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class VerificationModule { }
