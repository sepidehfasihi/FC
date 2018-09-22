import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JDatepickerComponent } from './components/jdatepicker.component';
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    FormsModule,
    //BrowserModule,
    CommonModule
  ],
  declarations: [
    JDatepickerComponent
  ],
  exports: [
    JDatepickerComponent
  ]
})
export class JDatepickerModule { }
