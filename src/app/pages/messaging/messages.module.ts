import { NgModule} from '@angular/core';
import { CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgaModule} from '../../theme/nga.module';
import {AppTranslationModule} from '../../app.translation.module';
import {routing} from './messages.routing';
import {MessagesComponent} from './messages.component';
import {InboxComponent} from './components/inbox.component';
import {DraftsComponent} from './components/drafts.component';
import {MessagingService} from './services/messaging.service';


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        AppTranslationModule,
        NgaModule,
        routing,
    ],

    declarations: [
        MessagesComponent,
        InboxComponent,
        DraftsComponent,
    ],
    providers: [
        MessagingService,

    ],
})
export class MessagesModule {
}
