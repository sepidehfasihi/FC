import {Component,Input} from '@angular/core';
import {NgbModal, NgbModalOptions} from "@ng-bootstrap/ng-bootstrap";
import {BaMsgCenterService} from './baMsgCenter.service';
import {UserService} from '../../../pages/Authentication/services/user.service';
import{SearchModel} from '../../../pages/Authentication/models/serchModel';
import {User} from '../../../pages/Authentication/models/user';
import {NotificationService} from '../../../pages/notification/services/notification.service';
import {NotificationDto} from '../../../pages/notification/models/notification';
import {SerchByUserId} from '../../../pages/notification/models/searchByUserId';
import {Router} from "@angular/router";
import {Authentication} from "../../../pages/login/Authentication";
@Component({
    selector: 'ba-msg-center',
    providers: [BaMsgCenterService, UserService, NotificationService],
    styleUrls: ['./baMsgCenter.scss'],
    templateUrl: './baMsgCenter.html',
})
export class BaMsgCenter {

    public notifications: NotificationDto[];
    public messages: NotificationDto[];
    user: User;
    modalReference: any;

    constructor(private _baMsgCenterService: BaMsgCenterService, private api: UserService,
                private notificationApi: NotificationService,private modalService: NgbModal , private router: Router) {
        this.notifications= new Array<NotificationDto>();
        const token = (JSON.parse((localStorage.getItem('Authentication'))) as Authentication).access_token;
        this.notifications = new Array<NotificationDto>();
        this.messages = new Array<NotificationDto>();
        // notificationApi.FindByUserId().subscribe(res=>{
        //     this.notifications = res as NotificationDto[];
        //
        // });


    }

    showNotification(model: NotificationDto)
    {


        const splQuery = model.RequestQuery.split('&');
        const type = splQuery[0].split('=')[1];
        const controller = splQuery[1].split('=')[1]
        const action = splQuery[2].split('=')[1]
        const params = splQuery[3].split('=')[1]
        // if (controller === 'AuditeeFinding' && action === 'Find') {
        //     this.router.navigate(['/pages/scheduler'], {queryParams: {query: params, type: type, controller: controller, action: action}});
        // }

      if (controller === 'Finding' && action === 'GetBySchedulerForNotification') {
        this.notificationApi.ChangeState(model);
        this.notifications.splice(this.notifications.indexOf(model), 1);
        this.router.navigate(['/pages/dashboard'], {queryParams: {query: params, type: type, controller: controller, action: action}});
      }





    }



}
