import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import * as globals from '../../../../helpers/globals';
import 'rxjs/add/operator/map';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BaseService} from "../../../generic/services/baseService";

@Injectable()
export class TeamService extends  BaseService {

  constructor(http: HttpClient) {
    super(http);
  }


  ///////////////////////////

  Create(model: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.token, 'Access-Control-Allow-Origin': '*'
    });
    const options = {headers: headers};
    let body = JSON.stringify(model);
    return this.http.post(globals.api + 'Teams/Save', body, options).map(res => res);
  }

  CreateResults(model: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.token, 'Access-Control-Allow-Origin': '*'
    });
    const options = {headers: headers};
    let body = JSON.stringify(model);
    return this.http.post(globals.api + 'Teams/SaveResults', body, options).map(res => res);
  }

  /////////
  Remove(model: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.token, 'Access-Control-Allow-Origin': '*'
    });
    let options = {headers: headers};
    let body = JSON.stringify(model);
    return this.http.post(globals.api + 'Teams/Remove', body, options).map(res => res);
  }


  FindByGroupId(id: number): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.token,
      'Access-Control-Allow-Origin': '*'
    });
    let options = {headers: headers};
    return this.http.post(globals.api + 'Teams/FindByGroupId?id=' + id, "", options).map(res => res);
  }

  FindByTeamId(id: number): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.token,
      'Access-Control-Allow-Origin': '*'
    });
    let options = {headers: headers};
    return this.http.post(globals.api + 'Teams/FindByTeamId?id=' + id, "", options).map(res => res);
  }

}
