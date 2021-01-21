import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {path: '',
  component:LayoutComponent,
  children:[
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'login', loadChildren: () => import ('./login/login.module').then(m => m.LoginModule)}
  ]},
  
  {path: 'dashboard',loadChildren: () => import ('./dashboard/dashboard.module').then(m => m.DashboardModule)},
  {path:'**', redirectTo: '',pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
