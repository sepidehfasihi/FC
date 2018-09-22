import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
import 'rxjs/add/operator/map';
import * as globals from '../../helpers/globals';

import {Authentication} from "../../pages/login/Authentication";
import {BaseService} from "../../pages/generic/services/baseService";
import {HttpClient, HttpHeaders} from "@angular/common/http";
@Injectable()
export class BlobService  extends BaseService {
  constructor(http: HttpClient) {
    super(http);
  }
  Remove(model: any, api: string): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.token,
      'Access-Control-Allow-Origin': '*'
    });
    let options = {headers: headers};
    let body = JSON.stringify(model);
    return this.http.post(api, body, options).map(res => res);
    // return this.http.post(globals.api +'Blob/Delete', body, options).map(res => res.json());

  }
}
