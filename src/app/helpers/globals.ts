'use strict';
import {Authentication} from '../pages/login/Authentication';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';





// export const api = 'http://185.166.213.229:8081/api/';
// export const apiLogin = 'http://185.166.213.229:8081/';



export const apiLogin = 'http://localhost:50168/';
export const api = 'http://localhost:50168/api/';


// export const apiLogin = 'http://localhost:25671/api/User/';
export const fileUploadBase = apiLogin + 'content/blobs/';
export class SharedService {
  public currentUser:Authentication;
  constructor() {
    this.currentUser = (JSON.parse((localStorage.getItem('Authentication'))) as Authentication);
  }
}

