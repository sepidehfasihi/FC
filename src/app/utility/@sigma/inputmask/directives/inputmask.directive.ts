import { Directive, OnInit, OnChanges, SimpleChanges, ElementRef, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { Console } from '@angular/core/src/console';

@Directive({
    selector: '[mask]'
})
export class InputMaskDirective implements OnInit, OnChanges {
    @Input() mask: any;
    @Input('ngModel') value: string;
    @Input('mask-placeholder') placeholder: string = '';

    @Output() onchange: EventEmitter<string> = new EventEmitter();
    patterns: any[] = [];

    public constructor(private element: ElementRef) { }

    ngOnInit(): void {
        this.patterns = this.parseMask(this.mask);
    }
    ngOnChanges(changes: SimpleChanges): void { }

    @HostListener('keydown', ['$event']) keydow(e: Event) { this.do(e); }
    @HostListener('focus', ['$event']) focus(e: Event) { this.do(e); }
    @HostListener('blur', ['$event']) blur(e: Event) { this.undo(); }

    parseMask(mask: string | any[]): any[] {
        let patterns: any[] = [];
        if (typeof mask == 'string') {
            let backslash = false;
            for (let i = 0; i < this.mask.length; i++) {
                let pattern = this.mask[i];
                if (backslash) { patterns.push(pattern); backslash = false; continue; }
                switch (pattern) {
                    case 'y':
                        if (this.mask.indexOf('yyyy') == i) { patterns.push({ length: 4, pattern: '^((1|2)|(1(2|3|4|8|9)\\d{0,2}|20\\d{0,2}))$' }); i += 3; }
                        break;
                    case 'M':
                        if (this.mask.indexOf('MM') == i) { patterns.push({ length: 2, pattern: '^((0|1)|(0[1-9]|1[0-2]))$' }); i += 1; }
                        break;
                    case 'd':
                        if (this.mask.indexOf('dd') == i) { patterns.push({ length: 2, pattern: '^((0|1|2|3)|(0[1-9]|(1|2)\\d)|3[0-1])$' }); i += 1; }
                        break;
                    case 'h':
                        if (this.mask.indexOf('hh') == i) { patterns.push({ length: 2, pattern: '^(([0-2])|([0-1][0-9]|2[0-3]))$' }); i += 1; }
                        break;
                    case 'm':
                        if (this.mask.indexOf('mm') == i) { patterns.push({ length: 2, pattern: '^(([0-5])|([0-5][0-9]))$' }); i += 1; }
                        break;
                    case '9': patterns.push({ length: 1, pattern: '\\d' }); break;
                    case 'A': patterns.push({ length: 1, pattern: '[a-zA-Z]' }); break;
                    case '\\': backslash = true; break;
                    default: patterns.push(pattern); break;
                }
            }
        }
        else {
            for (let i = 0; i < mask.length; i++) {
                if (typeof mask[i] == 'string') patterns.push({ length: 1, pattern: mask[i] });
                else patterns.push(mask[i]);
            }
        }
        return patterns;
    }

    private getValue(): string {
        let input: HTMLInputElement = this.element.nativeElement;
        let value = '';
        for (let i = 0, j = 0; j < input.value.length && i < this.patterns.length; i++) {
            let length = this.patterns[i].length;
            let pattern = this.patterns[i].pattern;
            let tmp = input.value.substring(j, j + length);
            let ismatch = true;
            while (tmp.length > 0 && !tmp.match(pattern)) {
                tmp = tmp.substring(0, tmp.length - 1);
                ismatch = false;
            }
            if (tmp) value += tmp;
            else break;
            if (!ismatch) break;
            j += length;
        }
        return value;
    }
    private fixEnd(value: string): string {
        while (value.length > 0 && this.placeholder.length >= value.length && this.placeholder[value.length - 1] == value[value.length - 1])
            value = value.substring(0, value.length - 1);
        return value;
    }
    private do(e?: any) {
        if (e.key && e.key.length == 1 || e.keyCode == 8) e.preventDefault();
        let input: HTMLInputElement = this.element.nativeElement;
        let value = this.getValue();
        if (e.keyCode) {
            if (e.keyCode == 8) {
                value = this.fixEnd(value);
                if (input.selectionStart < input.selectionEnd) value = value.substring(0, input.selectionStart) + value.substring(input.selectionEnd, input.value.length);
                else value = value.substring(0, value.length - 1);
            } else {
                input.value = value + e.key;
                value = this.getValue();
            }
        }
        for (let i = value.length; i < this.mask.length; i++) {
            if (this.placeholder.length > i) value += this.placeholder[i];
        }
        this.onchange.emit(input.value = value);
    }
    private undo() {
        let input: HTMLInputElement = this.element.nativeElement;
        this.onchange.emit(input.value = this.fixEnd(this.getValue()));
    }
}