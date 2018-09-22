import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './pages.routing';
import { NgaModule } from '../theme/nga.module';
import { AppTranslationModule } from '../app.translation.module';


import { Pages } from './pages.component';
import { GrowlModule } from 'primeng/primeng';
import { ProfileComponent } from './profile/components/profile.component';
import {PermissionComponent} from "./permission/components/permission.component";
import {TreeTableModule} from "primeng/primeng";
import {TreeModule} from "primeng/primeng";

@NgModule({
  imports: [CommonModule, AppTranslationModule, NgaModule, routing, GrowlModule,TreeTableModule,
    TreeModule],
  declarations: [Pages, ProfileComponent, PermissionComponent ]
})
export class PagesModule {
}
