import {Pipe, PipeTransform} from '@angular/core';
import {Scope} from '../Scope';

@Pipe({
    name: 'scopeFilter',
    pure: false,

})
export class ScopeFilterPipe implements PipeTransform {
    transform(scopes: Scope[], ...args: any[]): any {

        if (!scopes && !args) {
            return scopes;
        }

        const keyword = args[0];
        if (keyword === null || typeof keyword === 'undefined') {
            return null;
        }
        return scopes.filter((scope: Scope) => scope.Name.indexOf(keyword) !== -1)
    }
}
