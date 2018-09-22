import { NgModule} from '@angular/core';
import { CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AttachmentsComponent} from './attachments.component';
import {AppTranslationModule} from '../../../app.translation.module';
import {NgaModule} from '../../../theme/nga.module';
import {DataTableModule, FileUploadModule} from 'primeng/primeng';
import {BlobService} from "../../../services/general/blobService";

@NgModule({
    imports: [

        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        AppTranslationModule,
        NgaModule,
        FileUploadModule,
        DataTableModule,
    ],
    exports: [AttachmentsComponent],
    declarations: [
        AttachmentsComponent,
    ],
    providers: [
       BlobService
    ],
})
export class AttachmentsModule {
}
