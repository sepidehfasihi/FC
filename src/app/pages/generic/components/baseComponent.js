"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BaseComponent = /** @class */ (function () {
    function BaseComponent() {
        this.msgs = [];
    }
    BaseComponent.prototype.showSuccess = function () {
        var _this = this;
        this.msgs.push({ severity: 'success', summary: 'Action is successed',
            detail: 'Action date must be Success' });
        setTimeout(function () {
            _this.hide();
        }, 60000);
    };
    BaseComponent.prototype.showException = function (body) {
        var _this = this;
        this.msgs.push({ severity: 'error', summary: "Action is Faild",
            detail: 'Action is Faild!' });
        setTimeout(function () {
            _this.hide();
        }, 10000);
    };
    BaseComponent.prototype.convertDate = function (date) {
        return date.year + "/" + date.month + "/" + date.day;
    };
    BaseComponent.prototype.hide = function () {
        this.msgs = [];
    };
    BaseComponent.prototype.isAllowed = function (permission) {
        var currentAuth = JSON.parse((localStorage.getItem('Authentication')));
        return currentAuth.acl.includes(permission);
    };
    return BaseComponent;
}());
exports.BaseComponent = BaseComponent;
