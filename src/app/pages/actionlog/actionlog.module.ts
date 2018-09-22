import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../app.translation.module';
import { NgaModule } from '../../theme/nga.module';

import { ActionLogComponent} from './actionlog.component';
import { routing }       from './actionlog.routing';
import {
  DataTableModule, DropdownModule, FieldsetModule, GrowlModule, MessagesModule,
  PanelModule
} from 'primeng/primeng';
import {MyDatePickerModule} from "mydatepicker";
import {FileUploadModule} from "primeng/components/fileupload/fileupload";
import {AttachmentsModule} from '../generic/components/attachments.module';
import {ConfirmationPopoverModule} from "angular-confirmation-popover";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppTranslationModule,
    NgaModule,
    routing,
    DataTableModule,
    DropdownModule,
    GrowlModule,
    MessagesModule,
    MyDatePickerModule,
    FieldsetModule,
    PanelModule,
    FileUploadModule,
    AttachmentsModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'warning', // set defaults here
    })
  ],
  declarations: [
    ActionLogComponent,
  ]
})
export class ActionLogModule {}
