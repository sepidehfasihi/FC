import {Injectable} from "@angular/core";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Rx";
import * as globals from '../../helpers/globals'; //<==== this one
import 'rxjs/add/operator/map';
@Injectable()
export class LoginService {
    constructor(private http : Http) { }
    Authenticate(model:any) : Observable<any> {
        let headers = new Headers();
        headers.append( 'Content-Type', 'application/x-www-form-urlencoded');
        let options = new RequestOptions({ headers: headers });
        var body = 'username='+model.username+'&password=' + model.password + '&grant_type=password';
        return this.http.post(globals.apiLogin +'login',body,options).map(res => res.json());
    }
}
