import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import * as globals from '../../../helpers/globals';
import 'rxjs/add/operator/map';
import {Authentication} from '../../login/Authentication';
import {BaseService} from "../../generic/services/baseService";
import {HttpClient, HttpHeaders} from "@angular/common/http";
@Injectable()
export class UserService extends BaseService {
  constructor(http: HttpClient) {
    super(http);
  }

    GetUserId(serialNumber: any) : Observable<any> {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const options = { headers: headers};
        const body = JSON.stringify(serialNumber);

        return this.http.post( globals.api + 'user/GetUserId', body, options).map(res => res);
    }


  Get(model: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.token, 'Access-Control-Allow-Origin': '*'
    });
    const options = {headers: headers};
    let body = JSON.stringify(model);
    return this.http.post(globals.api + 'user/FindAll', body, options).map(res => res);
  }
}
