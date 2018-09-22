import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import * as globals from '../../../../helpers/globals';
import 'rxjs/add/operator/map';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BaseService} from "../../../generic/services/baseService";

@Injectable()
export class PlayerService extends  BaseService {

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
    return this.http.post(globals.api + 'Players/FindAll', body, options).map(res => res);
  }


///////////////////////////

  Create(model: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.token, 'Access-Control-Allow-Origin': '*'
    });
    const options = {headers: headers};
    let body = JSON.stringify(model);
    return this.http.post(globals.api + 'Players/Save', body, options).map(res => res);
  }


  SuggestionCode(model: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.token, 'Access-Control-Allow-Origin': '*'
    });
    const options = {headers: headers};
    let body = JSON.stringify(model);
    return this.http.post(globals.api + 'Players/SuggestionCode', body, options).map(res => res);
  }

  /////////
  Remove(model: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.token, 'Access-Control-Allow-Origin': '*'
    });
    let options = {headers: headers};
    let body = JSON.stringify(model);
    return this.http.post(globals.api + 'Players/Remove', body, options).map(res => res);
  }

  FindByClientId(id: number): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.token,
      'Access-Control-Allow-Origin': '*'
    });
    let options = {headers: headers};
    return this.http.post(globals.api + 'Players/FindByClientId?id=' + id, "", options).map(res => res);
  }

  FindByAorReportId(id: number): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.token,
      'Access-Control-Allow-Origin': '*'
    });
    let options = {headers: headers};
    return this.http.post(globals.api + 'Players/FindByAorReportId?id=' + id, "", options).map(res => res);
  }



}
