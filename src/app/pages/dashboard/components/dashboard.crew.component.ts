import {Component} from '@angular/core';
import {BaseComponent} from "../../generic/components/baseComponent";
import {Acl} from "../../generic/models/acl";

@Component({
  selector: 'dashboard-crew',
  templateUrl: './dashboard.crew.html',
})
export class DashboardCrewComponent extends BaseComponent{

  constructor () {
    super();
  }

  ngOnInit() {
  }
}
