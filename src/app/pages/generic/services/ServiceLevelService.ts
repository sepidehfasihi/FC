import {Injectable} from '@angular/core';
import * as globals from '../../../helpers/globals';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BaseService} from "../../generic/services/baseService";

@Injectable()
export class ServiceLevelService extends  BaseService {

  constructor(http: HttpClient) {
    super(http);
  }

  Get(model: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.token, 'Access-Control-Allow-Origin': '*'
    });
    const options = {headers: headers};
    let body = JSON.stringify(model);
    return this.http.post(globals.api + 'ServiceLevels/FindAll', body, options).map(res => res);
  }

}
