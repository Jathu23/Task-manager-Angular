import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { HttpClient, HttpClientModule } from '@angular/common/http';

import { CommonModule, NgFor } from '@angular/common';
import { AddTaskComponent } from './add-task/add-task.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { UserlistComponent } from './userlist/userlist.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';




@NgModule({
  declarations: [
AppComponent,
TasklistComponent,
AddTaskComponent,
EditTaskComponent,
UserlistComponent,
AddUserComponent,
EditUserComponent,
RegisterComponent,
LoginComponent
   
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    NgFor,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule  {


 }
