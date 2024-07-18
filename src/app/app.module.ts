import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterHospitalComponent } from './register-hospital/register-hospital.component';
import { HospitalListComponent } from './hospital-list/hospital-list.component';
import { HospitalUpdatesComponent } from './hospital-updates/hospital-updates.component';
import { HospitalDetailsComponent } from './hospital-details/hospital-details.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterHospitalComponent,
    HospitalListComponent,
    HospitalUpdatesComponent,
    HospitalDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
