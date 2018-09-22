import {NgModule, Component, ElementRef, Input, Renderer2, OnDestroy, Output, EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomHandler, MenuItem } from 'primeng/primeng';
import { Location } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'p-menubarSub',
  template: `
    <ul style=" " [ngClass]="{'ui-menubar-root-list  ': root,  'ui-widget-content ui-corner-all ui-submenu-list ui-shadow ':!root}" (click)="listClick($event)">
      <ng-template  ngFor let-child [ngForOf]="(root ? item : item.items)">
        <li *ngIf="child.separator" class="ui-menu-separator ui-content"  [ngClass]="{' ui-helper-hidden': child.visible === false}">      </li>
        <li *ngIf="!child.separator" #listItem  [ngClass]="{'ui-menuitem ui-corner-all  ':true, 'ui-menu-parent ':child.items,'ui-menuitem-active  ':listItem==activeItem, 'ui-helper-hidden': child.visible === false}"
            (mouseenter)="onItemMouseEnter($event,listItem,child)"  (mouseleave)="onItemMouseLeave($event,listItem)"   (click)="onItemMenuClick($event, listItem, child)">
          <a *ngIf="!child.routerLink"  [href]="child.url||'#'" [attr.target]="child.target"    [attr.title]="child.title" [attr.id]="child.id" (click)="itemClick($event, child)"
             [ngClass]="{'ui-menuitem-link ui-corner-all  ':true,'ui-state-disabled':child.disabled} "    [ngStyle]="child.style" [class]="child.styleClass">
            <span class="ui-menuitem-icon fa fa-fw " *ngIf="child.icon" [ngClass]="child.icon"> </span>
            <span class="ui-menuitem-text    ">  {{child.label}}  </span>
            <span class="ui-submenu-icon fa fa-fw" *ngIf="child.items" [ngClass]="{'fa-caret-down ':root,'fa-caret-left':!root}"></span>
          </a>

          <p-menubarSub     class="ui-submenu  " (clickItem)="clickMenuShow($event)" [item]="child" *ngIf="child.items"      [autoDisplay]="true" >
          </p-menubarSub>
        </li>

      </ng-template>
    </ul>
  `,
  // -------------------------------------Click MNU -------------------------
  styles: [`
    .Click_MNU{

    }

    .Custome_MNU{
      /*padding: 30px;!important;*/
      /*font-size: 20px;*/
      /*margin: 30px;!important;*/

    }
  `],
  providers: [DomHandler]
})
export class MenubarSub implements OnDestroy {

  @Input() item: MenuItem;

  @Input() root: boolean;

  @Input() autoDisplay: boolean;

  @Input() autoZIndex: boolean = true;

  @Input() baseZIndex: number = 0;

  @Output()
  clickItem: EventEmitter<any> = new EventEmitter<any>();

  documentClickListener: any;

  menuClick: boolean;

  menuHoverActive: boolean = false;

  activeItem: any;

  hideTimeout: any;

  constructor(public domHandler: DomHandler, public renderer: Renderer2) { }

  clickMenuShow(e){
    this.clickItem.emit(e);
  }

  onItemMenuClick(event: Event, item: HTMLLIElement, menuitem: MenuItem) {
    this.clickItem.emit(menuitem.label);
    // if (!this.autoDisplay) {
    //
    //     if (menuitem.disabled) {
    //         return;
    //     }
    //
    //     this.activeItem = item;
    //     let nextElement = <HTMLLIElement>item.children[0].nextElementSibling;
    //     if (nextElement) {
    //         let sublist = <HTMLUListElement>nextElement.children[0];
    //         if (this.autoZIndex) {
    //             sublist.style.zIndex = String(this.baseZIndex + (++DomHandler.zindex));
    //         }
    //
    //         if (this.root) {
    //             sublist.style.top = this.domHandler.getOuterHeight(item.children[0]) + 'px';
    //             sublist.style.left = '0px'
    //         }
    //         else {
    //             sublist.style.top = '0px';
    //             sublist.style.left = this.domHandler.getOuterWidth(item.children[0]) + 'px';
    //         }
    //     }
    //
    //     this.menuClick = true;
    //     this.menuHoverActive = true;
    //     this.bindEventListener();
    // }
  }

  bindEventListener() {
    if (!this.documentClickListener) {
      this.documentClickListener = this.renderer.listen('document', 'click',(event) => {
        if (!this.menuClick) {
          this.activeItem = null;
          this.menuHoverActive = false;
        }
        this.menuClick = false;
      });
    }
  }

  onItemMouseEnter(event: Event, item: HTMLLIElement, menuitem: MenuItem) {
    if (this.autoDisplay || (!this.autoDisplay && this.root && this.menuHoverActive)) {
      if (menuitem.disabled) {
        return;
      }

      if(this.hideTimeout) {
        clearTimeout(this.hideTimeout);
        this.hideTimeout = null;
      }

      this.activeItem = item;
      let nextElement = <HTMLLIElement>item.children[0].nextElementSibling;
      if (nextElement) {
        let sublist = <HTMLUListElement>nextElement.children[0];
        sublist.style.zIndex = String(++DomHandler.zindex);

        if (this.root) {

          sublist.style.top = this.domHandler.getOuterHeight(item.children[0]) + 'px';
          // sublist.style.left = 'px'
        } else {
          sublist.style.top = 'px';
          sublist.style.left = this.domHandler.getOuterWidth(item.children[0]) + 'px';
        }
      }
    }
  }
  onItemMouseLeave(event: Event, item: HTMLLIElement) {
    if (this.autoDisplay) {
      this.hideTimeout = setTimeout(() => {
        this.activeItem = null;
      }, 300);
    }
  }

  itemClick(event, item: MenuItem)  {
    if (item.disabled) {
      event.preventDefault();
      return;
    }
    if (!item.url) {
      event.preventDefault();
    }

    if (item.command) {
      item.command({
        originalEvent: event,
        item: item
      });
    }

    this.activeItem = null;
  }

  listClick(event) {
    if (this.autoDisplay) {
      this.activeItem = null;
    }
  }

  ngOnDestroy() {
    if(this.documentClickListener) {
      this.documentClickListener();
      this.documentClickListener = null;
    }

  }

}

@Component({
  selector: 'p-menubar',
  template: `
    <div class="  " >
      <div class="" [ngClass]="{'  ui-menubar ui-widget ui-content ui-corner-all ':true}"    [class]="styleClass"  [ngStyle]="style">
        <div class="  ">
          <p-menubarSub    (clickItem)="clickMenuShow($event)"  [item]="model" root="root"    [autoDisplay]="autoDisplay"  [baseZIndex]="baseZIndex" [autoZIndex]="autoZIndex">
            <ng-content> </ng-content>
          </p-menubarSub>
        </div>
        <!--<div class="ui-menubar-custom  "  >-->
        <ng-content> </ng-content>
        <!--</div>-->
      </div>
    </div>
  `,
  providers: [DomHandler]
})
export class Menubar {

  @Input() model: MenuItem[];

  @Input() style: any;

  @Input() styleClass: string;

  @Input() autoDisplay: boolean = true;

  @Input() autoZIndex: boolean = true;

  @Input() baseZIndex: number = 0;

  @Output()
  clickItem: EventEmitter<any> = new EventEmitter<any>();

  constructor(public el: ElementRef, public domHandler: DomHandler, public renderer: Renderer2) { }

  //  clickMenu(e) {
  //  this.clickItem.emit();
  // }

  clickMenuShow(e) {
    this.clickItem.emit(e);
  }
}

@NgModule({
  imports: [CommonModule, RouterModule],
  exports: [Menubar, RouterModule],
  declarations: [Menubar, MenubarSub]
})
export class MenubarModule { }
