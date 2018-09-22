import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {BlobDto} from '../../../models/QA/blobDto';
import {FileUpload} from 'primeng/primeng';
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {BlobService} from "../../../services/general/blobService";
@Component({
    selector: 'attachments-selector',
    templateUrl: './attachments.component.html',
  providers: [BlobService]
})

export class AttachmentsComponent implements AfterViewInit{
  modalReference: NgbModalRef;
  @Input() blobs: BlobDto[];
    @Input() showUpload: boolean;
    @Input() showAttachments: boolean = true;
    @Input() api: string;
    @Input() canDelete: boolean = true;
    @Output() onUploadFiles = new EventEmitter<any>();
    @Output() currentFileUpload: FileUpload;
    @ViewChild('fileUpload') public fileUpload:FileUpload;
  private currentEntry: BlobDto;
    constructor(private modalService: NgbModal, private blobApi: BlobService) {

    }
    public ngAfterViewInit(): void
    {
        this.currentFileUpload = this.fileUpload;
        this.fileUpload.showUploadButton = this.showUpload;
    }
    public uploadFiles(event, fileUpload: FileUpload) {
        this.currentFileUpload = fileUpload;
        this.onUploadFiles.emit({event, fileUpload});
        event.files = [];
    }
  remove(content: any, n: BlobDto) {

    this.currentEntry = n;
    this.modalReference = this.modalService.open(content);
  }
  confirmRemove() {

    this.blobApi.Remove(this.currentEntry, this.api).subscribe(res => {
      this.blobs.splice(this.blobs.indexOf(this.currentEntry), 1);
      this.blobs = this.blobs.splice(0, this.blobs.length);

      this.closeModal();
    });
  }

  closeModal(){
    this.modalReference.close();
  }
}
