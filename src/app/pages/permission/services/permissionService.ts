import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import * as globals from '../../../helpers/globals';
import 'rxjs/add/operator/map';
import { Authentication } from '../../login/Authentication';
import {BaseService} from "../../generic/services/baseService";
import {TreeNode} from "primeng/primeng";
import {HttpClient, HttpHeaders} from "@angular/common/http";



@Injectable()
export class PermissionService extends BaseService {
  constructor(http: HttpClient) {
    super(http);
  }
  getFilesystem()  {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json'
      ,'Authorization':this.token,'Access-Control-Allow-Origin':'*' });
    let options = { headers: headers };
    return this.http.get('http://172.20.20.62/local/filesystem.json', options)
      .toPromise()
      .then(res => <TreeNode[]> res);
  }
}
//
//
//
//   GetAllUser(): Observable<any> {
//     let headers = new Headers({ 'Content-Title': 'application/json', 'Authorization': this.token });
//     let options = new RequestOptions({ headers: headers });
//     return this.http.get(globals.timeTableApi+'Users/GetAll', options).map(res => res.json());
//   }
//
//
//
//
//   http://safety.iaa.ir/api/Auditee/FindAll
//
//
//
//
//
// }


// import * as globals from '../../../helpers/globals';
// import 'rxjs/add/operator/map';
// import { Authentication } from '../../login/Authentication';
// import {BaseService} from "../../generic/services/baseService";
// import { Injectable } from '@angular/core';
// import { Http, Response, Headers, RequestOptions } from '@angular/http';
// import {Observable} from "rxjs/Observable";
// import { TreeNode } from 'primeng/primeng';
// @Injectable()
// export class PermissionService extends BaseService {
//   constructor(http: Http) {
//     super(http);
//   }
//
//
//   // getFilesystem(): Observable<any> {
//   //   let headers = new Headers({ 'Content-Title': 'application/json', 'Authorization': this.token });
//   //   let options = new RequestOptions({ headers: headers });
//   //   return this.http.get('http://172.20.20.62/local/filesystem.json', options).toPromise()
//   //      .then(res => <TreeNode[]> res.json().data);
//   // }
//
//   getFilesystem() {
//      let headers = new Headers({ 'Content-Title': 'application/json', 'Authorization': this.token });
//      let options = new RequestOptions({ headers: headers });
//    // return this.http.get('http://172.20.20.62/local/filesystem.json',options)
//       // .toPromise()
//       // .then(res => <TreeNode[]> res.json().data);
//     return this.http.get('http://172.20.20.62/local/filesystem.json', options).map(res => res.json());
//   }
//
//   // GetAllUser(): Observable<any> {
//   //   let headers = new Headers({ 'Content-Title': 'application/json', 'Authorization': this.token });
//   //   let options = new RequestOptions({ headers: headers });
//   //   return this.http.get(globals.timeTableApi+'Users/GetAll', options).map(res => res.json());
//   // }


//}




