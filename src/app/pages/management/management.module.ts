import { NgModule} from '@angular/core';
import { CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgaModule} from '../../theme/nga.module';
import {AppTranslationModule} from '../../app.translation.module';
import {
  ConfirmDialogModule, DataTableModule, DropdownModule, GrowlModule, InputMask, InputMaskModule, KeyFilterModule,
  LightboxModule
} from "primeng/primeng";
import {CKEditorModule} from "ng2-ckeditor";
import {ConfirmationPopoverModule} from "angular-confirmation-popover";
import {AttachmentsModule} from "../generic/components/attachments.module";
import {AgmCoreModule } from '@agm/core';
import {BrowserModule} from "@angular/platform-browser";
import {ManagementComponent} from "./management.component";
import {PlayerComponent} from "./components/player.component";
import {managementRouting} from "./management.routing";
import {ButtonModule} from "primeng/button";
import {HttpClientModule} from "@angular/common/http";
import {DialogModule} from "primeng/dialog";
// import {FileUploadModule} from "../generic/components/fileupload";
import {DpDatePickerModule} from "ng2-jalali-date-picker";
import {NewPlayerComponent} from "./components/player/newPlayer";
import {ShowPlayer} from "./components/showPlayer/showPlayer";
import {AccordionModule} from "../generic/accordion";
import {PlayerGroupsComponent} from "./components/playerGroups.component";
import {NewGroup} from "./components/newGroup/newGroup";
import {PlayerTeamComponent} from "./components/playerTeam.component";
import {NewTeam} from "./components/newTeam/newTeam";
import { NewResultComponent} from "./components/newResult/newResult";
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AppTranslationModule,
    DataTableModule,
    NgaModule,
    GrowlModule,
    CKEditorModule,
    DropdownModule,
    HttpClientModule,
    AttachmentsModule,
    managementRouting,
    KeyFilterModule,
    DpDatePickerModule,
    DialogModule,
    ButtonModule,
    ConfirmDialogModule,
    // FileUploadModule,
    LightboxModule,
    InputMaskModule,
    AccordionModule,
    

    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'warning', // set defaults here
    }),
    AgmCoreModule.forRoot({
      // please get your own API key here:
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
      apiKey: 'AIzaSyA0Od9QL-pWq5ZahYGG-wspc6xkvhDhxBA'
    }),

    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'warning', // set defaults here
    })
  ],

  declarations: [
    ManagementComponent,
    PlayerComponent,
    NewPlayerComponent,
    ShowPlayer,
    PlayerGroupsComponent,
    NewGroup,
    PlayerTeamComponent,
    NewTeam,
    NewResultComponent
  ],
  providers: [
  ],
})
export class ManagementModule {
}
