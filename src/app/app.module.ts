import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesListComponent,
    AddEmployeeComponent,
    HomeComponent,
    UpdateEmployeeComponent,
  ],
  imports: [FormsModule, HttpClientModule, BrowserModule, AppRoutingModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}

// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms'; // Import FormsModule

// import { AppComponent } from './app.component';
// import { AddEmployeeComponent } from './add-employee/add-employee.component'; // Import your component

// @NgModule({
//   declarations: [
//     AppComponent,
//     AddEmployeeComponent, // Declare your component
//   ],
//   imports: [
//     BrowserModule,
//     FormsModule, // Add FormsModule to imports array
//   ],
//   providers: [],
//   bootstrap: [AppComponent],
// })
// export class AppModule {}

// import { NgModule } from '@angular/core';
// import {
//   BrowserModule,
//   provideClientHydration,
// } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { EmployeesListComponent } from './employees-list/employees-list.component';
// import { AddEmployeeComponent } from './add-employee/add-employee.component';
// import { HomeComponent } from './home/home.component';
// import {
//   HttpClientModule,
//   provideHttpClient,
//   withFetch,
// } from '@angular/common/http';

// @NgModule({
//   declarations: [
//     AppComponent,
//     EmployeesListComponent,
//     AddEmployeeComponent,
//     HomeComponent,
//   ],
//   imports: [FormsModule, HttpClientModule, BrowserModule, AppRoutingModule],
//   providers: [provideClientHydration(), provideHttpClient(withFetch())],
//   bootstrap: [AppComponent],
// })
// export class AppModule {}
