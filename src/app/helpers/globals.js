'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
//    export const baseApi = 'http://150.150.100.216/qaapi/';
//    export const api = 'http://150.150.100.216/qaapi/api/';
// export const apiLogin = 'http://150.150.100.216/qaapi/';
exports.api = 'http://172.20.20.62/Safety/api/';
exports.timeTableApi = 'http://localhost:2333/api/';
exports.ectmApi = 'http://150.150.100.216/EctmApi/api/';
exports.apiLogin = 'http://150.150.100.216/baseinfo/api/User/';
exports.fileUploadBase = exports.api + 'Blob/File?';
var SharedService = (function () {
    function SharedService() {
        this.currentUser = JSON.parse((localStorage.getItem('Authentication')));
    }
    return SharedService;
}());
exports.SharedService = SharedService;
