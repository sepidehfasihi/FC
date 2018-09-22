import {Message} from "primeng/primeng";
import {forEach} from "@angular/router/src/utils/collection";
import {MenuDto} from "../models/menuDto";
import * as moment from 'jalali-moment';

export class BaseComponent{
  public msgs: Message[] = [];
  showSuccess() {
    this.msgs.push({severity: 'success', summary: 'عملیات موفقیت آمیز',
      detail: 'داده ها با موفقیت ثبت شد'});
    setTimeout(() => {
      this.hide();
    }, 4000);
  }
  showException(body:string) {
    this.msgs.push({severity: 'error', summary: "Action is Faild",
      detail: body});
    setTimeout(() => {
      this.hide();
    }, 4000);
  }

  showExceptionTekrari() {
    this.msgs.push({severity: 'error', summary: "عملیات ناموفق",
      detail: 'تیم ها تکراری می باشند'});
    setTimeout(() => {
      this.hide();
    }, 4000);
  }
  convertDate(date: any){
    return `${date.year}/${date.month}/${date.day}`
  }
  hide() {
    this.msgs = [];
  }

  isAllowed(permission:string):boolean{
    const currentAuth = (JSON.parse((localStorage.getItem('Authentication'))) as MenuDto);
    return currentAuth.acl.includes(permission);
}

  convertToDate(dateString: string): Date {
    var t = moment.from(dateString, 'fa', 'YYYY/MM/DD').format('YYYY/MM/DD');
    var date = new Date(t);
    return date;
  }



}
