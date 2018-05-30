import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router,RouterModule } from '@angular/router';
import { RoutingModule } from './modules/routing/routing.module';
import { AppComponent } from './app.component';
import { SignupformComponent } from './components/signupform/signupform.component';
import { HomeComponent } from './components/home/home.component';
import { AuthguardService } from './services/authguard.service';
//pour le toast
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { TodolistComponent } from './components/todolist/todolist.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupformComponent,
    HomeComponent,
    TodolistComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule,
    RoutingModule,
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      
    }), // ToastrModule added
 
   
  ],
  providers: [AuthguardService],
  bootstrap: [AppComponent]
})


export class AppModule {

 }
