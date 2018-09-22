import {Component, ElementRef, EventEmitter, HostListener, Input, Output} from '@angular/core';

@Component({
  selector: 'ba-toppannel',
  templateUrl: './baTopPannel.html',
  //styleUrls: ['./baTopPannel.scss']
})
export class BaTopPannelComponent {

  @Input() title: string;
  @Output() onGoBack: EventEmitter<any> = new EventEmitter();

  constructor() {

  }

  goBackToPage(event) {
    this.onGoBack.emit(event);
  }
}
