import {Pipe, PipeTransform} from '@angular/core';
import {Auditee} from '../Auditee';

@Pipe({
    name: 'auditeeFilter',
    pure: false,

})
export class AuditeeFilterPipe implements PipeTransform {
    transform(auditees: Auditee[], ...args: any[]): any {
        if (!auditees && !args) {
            return auditees;
        }
        const keyword = args[0];
        if (keyword === null || typeof keyword === 'undefined') {
            return null;
        }
        return auditees.filter((auditee: Auditee) => auditee.Lastname.indexOf(keyword) !== -1)
    }
}
