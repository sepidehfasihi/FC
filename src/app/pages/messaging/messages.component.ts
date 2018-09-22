import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
    selector: 'messages',
    templateUrl: './templates/messages.html',
})
export class MessagesComponent implements OnInit{
    ngOnInit(): void {
    }

    private ready: boolean = false;

    constructor(private builder: FormBuilder) {
        const sortEmailsByDate = false;
    }
}
