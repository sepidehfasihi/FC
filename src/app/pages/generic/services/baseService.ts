import {Http} from "@angular/http";
import {Authentication} from "../../login/Authentication";
import {HttpClient} from "@angular/common/http";

export class BaseService{
  token: string;
  progress$: any;
  progress: any;
  progressObserver: any;
  constructor(public http: HttpClient) {
    var currentUser = null;
    if (localStorage.getItem('Authentication') !== 'undefined') {
      currentUser = JSON.parse((localStorage.getItem('Authentication'))) as Authentication;
      if (currentUser && currentUser.access_token) {
        this.token = 'Bearer ' + currentUser.access_token;
        // this.token='Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1bmlxdWVfbmFtZSI6ImNyZXdNYW5hZ2VtZW50IiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvdXJpIjoiMTcyLjIwLjMxLjc3IiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9leHBpcmVkIjoiMDQvMDEvMjAxOCAwOTo1MTozNSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvZXhwaXJhdGlvbiI6IjAzLzAyLzIwMTggMDk6NTE6MzUiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3VzZXJkYXRhIjoiNiIsImdyb3Vwc2lkIjoiNiIsInJvbGUiOiJBZG1pbiIsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3QvIiwiYXVkIjoiQW55IiwiZXhwIjoxNTE5OTU5MDk1LCJuYmYiOjE1MTczNzk2OTV9.NzRwrZ2wuT2wMyeVFjzTskHk0bNyFx0DEGC1exWaY0w'
        // this.token='Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1bmlxdWVfbmFtZSI6ImNyZXdNYW5hZ2VtZW50IiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvY291bnRyeSI6IlRIUiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL3VyaSI6IjE3Mi4yMC4xLjYwIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9leHBpcmVkIjoiMDQvMDgvMjAxOCAxMToyNToyOCIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvZXhwaXJhdGlvbiI6IjAzLzA5LzIwMTggMTE6MjU6MjgiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3VzZXJkYXRhIjoiNiIsImdyb3Vwc2lkIjoiNiIsInJvbGUiOiJBZG1pbiIsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3QvIiwiYXVkIjoiQW55IiwiZXhwIjoxNTIwNTY5NTI4LCJuYmYiOjE1MTc5OTAxMjh9.ESv-Pnkd_dul9dn9WLHam_jSz9lswVx5Gs5Z-fYKFUY'
      }
    }
  }
}
