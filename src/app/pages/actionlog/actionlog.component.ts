import {Component} from '@angular/core';
import {SharedService} from '../../helpers/globals';
import {BaseComponent} from "../generic/components/baseComponent";
import {Acl} from "../generic/models/acl";

@Component({
  selector: 'actionlog',
  styleUrls: ['./actionlog.scss'],
  templateUrl: './actionlog.html',
})
export class ActionLogComponent extends BaseComponent {
  isAuditee: boolean = false;
  isAuditor: boolean = false;
  isAdmin: boolean = false;
  isSafetySystem = false;
  isTimeTableSystem = false;
  isCrew = false;
  constructor() {
    super();
    const sharedService = new SharedService();
    // if (this.isAllowed('Safety')){
    //   this.isSafetySystem = true;
    // }
    // if (this.isAllowed(Acl.CrewManagement)){
    //   this.isCrew = true;
    // }
    //  if (sharedService.currentUser.user.group.project.name === 'Timetable')
    //  {
    //     this.isTimeTableSystem = true;
    //  }
    // if (sharedService.currentUser.user.group.project.name === 'Safety')
    // {
    //   this.isSafetySystem = true;
    // }
    //   const isAuditorRole = sharedService.currentUser.user.group.roles.find(x => x.name === 'Auditor');
    //   if (isAuditorRole) {
    //       this.isAuditor = true;
    //   }
    //   const isAuditeeRole = sharedService.currentUser.user.group.roles.find(x => x.name === 'Auditee');
    //   if (isAuditeeRole) {
    //       this.isAuditee = true;
    //   }
    //   const isAdminRole = sharedService.currentUser.user.group.roles.find(x => x.name === 'Admin');
    //   if (isAdminRole) {
    //       this.isAdmin = true;
    //   }
  }

}
