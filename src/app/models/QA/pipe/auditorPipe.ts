import {Pipe, PipeTransform} from '@angular/core';
import {Auditor} from '../Auditor';

@Pipe({
    name: 'auditorFilter',
    pure: false,

})
export class AuditorFilterPipe implements PipeTransform {
    transform(auditors: Auditor[], ...args: any[]): any {
        if (!auditors && !args) {
            return auditors;
        }

        const keyword = args[0];
        if (keyword === null || typeof keyword === 'undefined') {
            return null;
        }
        return auditors.filter((auditor: Auditor) => auditor.Lastname.indexOf(keyword) !== -1)
    }
}
