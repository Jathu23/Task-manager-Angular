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




@NgModule({
  declarations: [
AppComponent,
TasklistComponent,
AddTaskComponent,
EditTaskComponent
   
  

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
