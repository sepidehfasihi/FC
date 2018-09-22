import { Component, Input, OnInit, ElementRef } from '@angular/core';
import { JDate } from '../../jdate/index';

@Component({
    selector: 'jdatepicker',
    templateUrl: './jdatepicker.component.html',
    styleUrls: ['./jdatepicker.component.css']
})
export class JDatepickerComponent implements OnInit {
    @Input() input: HTMLInputElement;
    @Input() format: string = 'yyyy/MM/dd';

    year: number;
    month: number;
    day: number;

    yearDialog: boolean = false;
    monthDialog: boolean = false;

    monthes: string[] = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'];
    monthDays: number[] = [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29];
    weekDays: string[] = ['ش', 'ی', 'د', 'س', 'چ', 'پ', 'ج'];

    constructor(private element: ElementRef) { }
    ngOnInit(): void {
        let now = JDate.now();
        this.year = now.getYear();
        this.month = now.getMonth() - 1;
        this.day = now.getDay();

        if (this.input) {
            this.input.addEventListener('click', () => this.show());
            this.input.addEventListener('keyup', (e) => {
                if([13,27].indexOf(e.keyCode) > -1) {
                    if(e.keyCode == 13) {
                        this.setValue();
                        if(this.isshow()) this.hide();
                        else this.show();
                    } else {
                        this.hide();
                    }
                } else this.show();
            });
            this.input.addEventListener('focus', () => this.show());
            this.input.addEventListener('blur', () => {
                if(this.element.nativeElement.querySelector('*:hover') == null) this.hide();
            });
        }
    }
    isshow(): boolean {
        return this.element.nativeElement.classList.contains('show');
    }
    show() {
        let jdate = this.getValue();
        this.day = jdate.getDay();
        this.month = jdate.getMonth() - 1;
        this.year = jdate.getYear();
        this.element.nativeElement.classList.add('show');
    }
    hide() { this.element.nativeElement.classList.remove('show'); }

    getDays() {
        let jdate = new JDate(this.year, this.month + 1, 1);
        let date = jdate.toGregorian();
        let start = date.getDay();
        let days: number[] = [];
        for (let i = 0; i <= start; i++) {
            days.push(null);
        }
        let count = this.monthDays[this.month] + (jdate.isLeapYear() && this.month == 11 ? 1 : 0);
        for (let i = 1; i <= count; i++) {
            days.push(i);
        }
        return days;
    }

    getValue(): JDate {
        let jdate: JDate;
        let tmp = JDate.now();
        jdate = JDate.parseJalali(this.input.value, this.format);
        if (!jdate.getYear()) jdate.setYear(tmp.getYear());
        if (!jdate.getMonth()) jdate.setMonth(tmp.getMonth());
        if (!jdate.getDay()) jdate.setDay(tmp.getDay());
        return jdate;
    }
    setValue() {
        let value = this.format;
        value = value.replace(/yyyy/g, this.year.toString());
        value = value.replace(/MM/g, (this.month + 1).toString());
        value = value.replace(/dd/g, this.day.toString());
        let jdate = new JDate(this.year, this.month + 1, this.day);
        this.input.value = jdate.format(this.format);

        this.input.focus();
        this.input.blur();
    }
    setDay(day: number) { this.day = day; this.setValue(); this.hide(); }
    setMonth(month: number) { this.month = month; this.monthDialog = false; }
    setYear(year: number) { this.year = year; this.yearDialog = false; }
    isSelectedDay(day: number): boolean {
        let jdate = this.getValue();
        if (jdate.getDay() == day && (jdate.getMonth() - 1) == this.month && jdate.getYear() == this.year) return true;
        return false;
    }

    yearDialogShow() {
        this.yearDialog = true;
        this.element.nativeElement.querySelector('.year-dialog>input').select();
    }
    yearDialogClose() { this.yearDialog = false; }
}
