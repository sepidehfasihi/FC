import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'ba-menu-item',
  templateUrl: './baMenuItem.html',
  styleUrls: ['./baMenuItem.scss']
})
export class BaMenuItem {

  @Input() menuItem:any;
  @Input() child:boolean = false;

  @Output() itemHover = new EventEmitter<any>();
  @Output() toggleSubMenu = new EventEmitter<any>();

  public onHoverItem($event):void {

    //color hover of item menu
    this.itemHover.emit($event);
  }

  public onToggleSubMenu($event, item):boolean {
    $event.item = item;
    console.log($event.item.children);
    var menuitem = $event.item;
    $event.item.children.forEach(
      element => {
        element.expanded = false;
      }
    );
    //this.toggleSubMenu.emit($event);
    $event.item.expanded = !$event.item.expanded;
    return false;
  }
}
