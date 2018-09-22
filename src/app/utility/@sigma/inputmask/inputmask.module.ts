import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputMaskDirective } from './directives/inputmask.directive';
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [FormsModule,CommonModule,],
  declarations: [InputMaskDirective],
  exports: [InputMaskDirective]
})
export class InputMaskModule { }
