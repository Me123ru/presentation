import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterHospitalComponent } from './register-hospital/register-hospital.component';
import { HospitalListComponent } from './hospital-list/hospital-list.component';
import { HospitalDetailsComponent } from './hospital-details/hospital-details.component';
import { HospitalUpdatesComponent } from './hospital-updates/hospital-updates.component';

const routes: Routes = [

 {
  path: '',
  component: RegisterHospitalComponent
 },

 {
  path: 'hospitals',
  component: HospitalListComponent
 },

 {
  path: 'hospital-details',
  component: HospitalDetailsComponent
 },

 {
  path: 'hospital-updates',
  component: HospitalUpdatesComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
