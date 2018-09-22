import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import {DataTableModule, DropdownModule,
    FileUploadModule, ConfirmDialogModule, ConfirmationService,
    DialogModule, ButtonModule,
    MessagesModule, GrowlModule , ChartModule, MultiSelectModule, EditorModule,
    InputMaskModule, InputSwitchModule, BlockUIModule, ProgressBarModule,
} from 'primeng/primeng';
import { LoadingBarHttpModule } from '@ngx-loading-bar/http';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { LoadingBarModule } from '@ngx-loading-bar/core';
/*
 * Platform and Environment providers/directives/pipes
 */
import { routing } from './app.routing';

// App is our top Level component
import { App } from './app.component';
import { AppState, InternalStateType } from './app.service';
import { GlobalState } from './global.state';
import { NgaModule } from './theme/nga.module';
import { PagesModule } from './pages/pages.module';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';

import {DragulaService} from "ng2-dragula";
import {HotkeyModule} from "angular2-hotkeys";
import {BusyModule} from "angular2-busy";
import {CKEditorModule} from "ng2-ckeditor";
import {HttpClientModule} from "@angular/common/http";

// Application wide providers
const APP_PROVIDERS = [
  AppState,
  GlobalState,
  DragulaService
];

export type StoreType = {
  state: InternalStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [App],
  declarations: [
    App,
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    NgbModule.forRoot(),
      NoopAnimationsModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgaModule.forRoot(),
    NgbModule.forRoot(),
    PagesModule,
      DataTableModule, DropdownModule,
      FileUploadModule, ConfirmDialogModule,
      DialogModule, ButtonModule,
      MessagesModule, GrowlModule , ChartModule, MultiSelectModule, EditorModule,
      InputMaskModule, InputSwitchModule, BlockUIModule, ProgressBarModule,
    routing,
    LoadingBarHttpModule,
    LoadingBarRouterModule,
    LoadingBarModule,
    BusyModule,
    HotkeyModule.forRoot(),
    BrowserAnimationsModule,
    CKEditorModule,

  ],

  providers: [ // expose our Services and Providers into Angular's dependency injection
    APP_PROVIDERS,

  ],
})

export class AppModule {

  constructor(public appState: AppState) {
  }
}
