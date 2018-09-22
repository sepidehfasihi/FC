"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var globals = require("../../../helpers/globals");
require("rxjs/add/operator/map");
var NotificationService = (function () {
    function NotificationService(http) {
        this.http = http;
        var currentUser = null;
        if (localStorage.getItem('Authentication') !== 'undefined') {
            currentUser = JSON.parse((localStorage.getItem('Authentication')));
            this.token = 'Bearer ' + currentUser.accessTokenHash;
        }
    }
    NotificationService.prototype.FindByUserId = function () {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json', 'Authorization': this.token });
        var options = new http_1.RequestOptions({ headers: headers });
        var body = null;
        return this.http.post(globals.api + 'Notification/FindByUserId', body, options).map(function (res) { return res.json(); });
    };
    NotificationService.prototype.GetByUserId = function (model) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json', 'Authorization': this.token, 'Access-Control-Allow-Origin': '*' });
        var options = new http_1.RequestOptions({ headers: headers });
        var body = JSON.stringify(model);
        return this.http.post(globals.api + 'Notification/GetByUserId', body, options).map(function (res) { return res.json(); });
    };
    NotificationService.prototype.SetIsFinal = function (model) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json', 'Authorization': this.token, 'Access-Control-Allow-Origin': '*' });
        var options = new http_1.RequestOptions({ headers: headers });
        var body = JSON.stringify(model);
        return this.http.post(globals.api + 'Notification/SetIsFinal', body, options).map(function (res) { return res.json(); });
    };
    NotificationService.prototype.GetAllChecking = function (model) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json', 'Authorization': this.token,
            'Access-Control-Allow-Origin': '*' });
        var options = new http_1.RequestOptions({ headers: headers });
        var body = JSON.stringify(model);
        return this.http.post(globals.api + 'Notification/GetCheckedByUserId', body, options).map(function (res) { return res.json(); });
    };
    return NotificationService;
}());
NotificationService = __decorate([
    core_1.Injectable()
], NotificationService);
exports.NotificationService = NotificationService;
