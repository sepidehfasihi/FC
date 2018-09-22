"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var baMsgCenter_service_1 = require("./baMsgCenter.service");
var angular2_jwt_1 = require("angular2-jwt");
var user_service_1 = require("../../../pages/Authentication/services/user.service");
var serchModel_1 = require("../../../pages/Authentication/models/serchModel");
var notification_service_1 = require("../../../pages/notification/services/notification.service");
var schedulerService_1 = require("../../../pages/scheduler/services/schedulerService");
var BaMsgCenter = (function () {
    function BaMsgCenter(_baMsgCenterService, api, notificationApi, schedulerApi, router) {
        var _this = this;
        this._baMsgCenterService = _baMsgCenterService;
        this.api = api;
        this.notificationApi = notificationApi;
        this.schedulerApi = schedulerApi;
        this.router = router;
        this.jwthelper = new angular2_jwt_1.JwtHelper();
        this.notifications = new Array();
        var token = JSON.parse((localStorage.getItem('Authentication'))).accessTokenHash;
        var tokenDecode = this.jwthelper.decodeToken(token);
        var serialNumber = tokenDecode.certserialnumber;
        var searchModel = new serchModel_1.SearchModel();
        searchModel.serialNumber = serialNumber;
        this.notifications = new Array();
        this.messages = new Array();
        notificationApi.FindByUserId().subscribe(function (res) {
            _this.notifications = res;
        });
    }
    BaMsgCenter.prototype.showNotification = function (model) {
        var splQuery = model.RequestQuery.split('&');
        var type = splQuery[0].split('=')[1];
        var controller = splQuery[1].split('=')[1];
        var action = splQuery[2].split('=')[1];
        var params = splQuery[3].split('=')[1];
        if (controller === 'AuditeeFinding' && action === 'Find') {
            this.router.navigate(['/pages/scheduler'], { queryParams: { query: params } });
        }
        // const modelSearch= new SearchMode();
        //
        // modelSearch.id= model.id;
        // this.notificationApi.SetIsFinal(modelSearch).subscribe(res => {
        //
        //     for(const noti of this.notifications)
        //     {
        //         if(noti.id === res.id)
        //             this.notifications.splice(this.notifications.indexOf(noti) , 1);
        //     }
        // });
        //
        // if (model.notificationTypeId === 1) {
        //     // notificationType==SchedulerDto
        //     const modelSearch= new SearchMode();
        //     modelSearch.id= model.entityId;
        //     modelSearch.version= model.entityVersion;
        //     this.schedulerApi.GetById(modelSearch).subscribe(res => {
        //        this.scheudler = res ;
        //        console.log(this.scheudler);
        //
        //     });
        // }
    };
    return BaMsgCenter;
}());
__decorate([
    core_1.Input()
], BaMsgCenter.prototype, "scheudler", void 0);
BaMsgCenter = __decorate([
    core_1.Component({
        selector: 'ba-msg-center',
        providers: [baMsgCenter_service_1.BaMsgCenterService, user_service_1.UserService, notification_service_1.NotificationService, schedulerService_1.SchedulerService],
        styleUrls: ['./baMsgCenter.scss'],
        templateUrl: './baMsgCenter.html',
    })
], BaMsgCenter);
exports.BaMsgCenter = BaMsgCenter;
