import {Injectable} from '@angular/core';
import * as globals from '../../../helpers/globals';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BaseService} from "../../generic/services/baseService";

@Injectable()
export class AddressService extends  BaseService {

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
    return this.http.post(globals.api + 'Addresss/FindAll', body, options).map(res => res);
  }


///////////////////////////

  Create(model: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.token, 'Access-Control-Allow-Origin': '*'
    });
    const options = {headers: headers};
    let body = JSON.stringify(model);
    return this.http.post(globals.api + 'Addresss/Save', body, options).map(res => res);
  }

  /////////
  Remove(model: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.token, 'Access-Control-Allow-Origin': '*'
    });
    let options = {headers: headers};
    let body = JSON.stringify(model);
    return this.http.post(globals.api + 'Addresss/Remove', body, options).map(res => res);
  }



}
