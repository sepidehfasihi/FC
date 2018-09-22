import {Component, OnInit} from '@angular/core';
import {InboxRecord} from '../models/inboxRecord';
import {MessagingService} from '../services/messaging.service';
import {FormBuilder} from '@angular/forms';

@Component({
    selector: 'drafts',
    templateUrl: '../templates/drafts.html',
    providers: [MessagingService],
})
export class DraftsComponent implements OnInit{
    ngOnInit(): void {
    }
  public items: InboxRecord[] = [];
  public ready: boolean = false;

    constructor(private builder: FormBuilder, private messagingApi: MessagingService) {
        const sortEmailsByDate = false;
        messagingApi.Get(null).subscribe(emails=>{
            this.ready = true;
            this.items = emails;

            if (sortEmailsByDate) {
                this.items.sort(
                    (a, b) => new Date(a.Date).getTime() < new Date(b.Date).getTime() ? -1 : 1);
            }
        });
    }
}
