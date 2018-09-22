import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
import * as globals from '../../../helpers/globals';
import 'rxjs/add/operator/map';
import {InboxRecord} from '../models/inboxRecord';
import {Authentication} from '../../login/Authentication';
import {BaseService} from "../../generic/services/baseService";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {RequestOptions} from "@angular/http";
@Injectable()
export class MessagingService extends BaseService {
  constructor(http: HttpClient) {
    super(http);
  }
    Get(model: any): Observable<any> {
        let headers = new HttpHeaders({'Content-Type': 'application/json', 'Authorization': this.token});
        let options = {headers: headers};
        let body = JSON.stringify(model);
        return this.http.get(globals.api + 'messaging/FindAll', options).map(res => res);
    }

    Create(model: any): Observable<any> {
        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': this.token,
            'Access-Control-Allow-Origin': '*'
        });
        let options =  {headers: headers};
        let body = JSON.stringify(model);
        return this.http.post(globals.api + 'messaging/Save', body, options).map(res => res);
    }

    // Remove(model: any): Observable<any[]> {
    //     let headers = new HttpHeaders({
    //         'Content-Type': 'application/json',
    //         'Authorization': this.token,
    //         'Access-Control-Allow-Origin': '*'
    //     });
    //     let options = {headers: headers};
    //
    //     let body = JSON.stringify(model);
    //     return this.http.post(globals.api + 'messaging/Delete', body, options).map(res => res);
    // }
}
