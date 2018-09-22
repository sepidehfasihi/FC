import {Component} from '@angular/core';
import {BaseComponent} from "../../generic/components/baseComponent";
import {Acl} from "../../generic/models/acl";

@Component({
  selector: 'dashboard-safety',
  templateUrl: './dashboard.safety.html',
})
export class DashboardSafetyComponent extends  BaseComponent{

isAllowAuditee: boolean = false;
isAllowAuditor: boolean = false;
  constructor () {
    super();
    this.isAllowAuditee = this.isAllowed(Acl.SafetyOtherAuditeeDashboard);
    this.isAllowAuditor = this.isAllowed(Acl.SafetyOtherAuditorDashboard);
  }

  ngOnInit() {
  }
}
