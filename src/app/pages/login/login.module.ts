import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { AppTranslationModule } from '../../app.translation.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { Login } from './login.component';
import { routing }       from './login.routing';
import {GrowlModule} from "primeng/primeng";
import {BusyModule} from "angular2-busy";


@NgModule({
  imports: [
    CommonModule,
    AppTranslationModule,
    ReactiveFormsModule,
    FormsModule,
    NgaModule,
    GrowlModule,
    routing,
    BusyModule
  ],
  declarations: [
    Login
  ]
})
export class LoginModule {}
