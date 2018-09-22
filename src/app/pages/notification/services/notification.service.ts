import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import * as globals from '../../../helpers/globals';
import 'rxjs/add/operator/map';
import {Authentication} from '../../login/Authentication';
import {BaseService} from "../../generic/services/baseService";
import {HttpClient, HttpHeaders} from "@angular/common/http";
@Injectable()
export class NotificationService extends BaseService {
  constructor(http: HttpClient) {
    super(http);
  }
    FindByUserId(): Observable<any> {
        let headers = new HttpHeaders({'Content-Type': 'application/json', 'Authorization': this.token});
        let options = {headers: headers};
        let body = null;
        return this.http.post(globals.api + 'Notification/FindByUserId',body, options).map(res => res);
    }
    GetByUserId(model:any) : Observable<any> {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json','Authorization':this.token,'Access-Control-Allow-Origin':'*' });
        let options = { headers: headers };
        let body = JSON.stringify(model);
        return this.http.post(globals.api + 'Notification/GetByUserId',body, options).map(res => res);

    }
    SetIsFinal(model: any): Observable<any>
    {

        let headers = new HttpHeaders({ 'Content-Type': 'application/json','Authorization':this.token,'Access-Control-Allow-Origin':'*' });
        let options = { headers: headers };
        let body = JSON.stringify(model);
        return this.http.post(globals.api + 'Notification/SetIsFinal',body, options).map(res => res);
    }

    GetAllChecking(model: any):Observable<any>
    {

        const headers = new HttpHeaders({ 'Content-Type': 'application/json','Authorization': this.token,
            'Access-Control-Allow-Origin':'*' });
        const options = { headers: headers };
        const body = JSON.stringify(model);
        return this.http.post(globals.api + 'Notification/GetCheckedByUserId', body , options).map(res => res);

    }


  ChangeState(model: any):Observable<any>
  {

    const headers = new HttpHeaders({ 'Content-Type': 'application/json','Authorization': this.token,
      'Access-Control-Allow-Origin':'*' });
    const options = { headers: headers };
    const body = JSON.stringify(model);
    return this.http.post(globals.api + 'Notification/ChangeState', body , options).map(res => res);

  }

}
