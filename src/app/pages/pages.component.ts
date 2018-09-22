import {Component,Input} from '@angular/core';
import {Routes} from '@angular/router';
import {BaMenuService} from '../theme';
import { PAGES_MENU} from './pages.menu';
import {UserService}  from '../pages/Authentication/services/user.service';
import{SearchModel} from '../pages/Authentication/models/serchModel';
import {AuthHttp, AuthConfig, JwtHelper} from 'angular2-jwt';
import {User} from '../pages/Authentication/models/user';
import {forEach} from "@angular/router/src/utils/collection";
import {Authentication} from './login/Authentication';
import {Auditor} from '../models/QA/Auditor';
import {TranslateService} from "@ngx-translate/core";
@Component({
  selector: 'pages',
  providers: [UserService],
  template: `
    <ba-sidebar></ba-sidebar>
    <ba-page-top></ba-page-top>
    <div class="al-main">
      <div class="al-content">
        <ba-content-top></ba-content-top>
        <router-outlet></router-outlet>
      </div>
    </div>
    <footer class="al-footer clearfix">
      <div class="al-footer-right" translate>{{'general.created_with'}}</div>
      <div class="al-footer-left clearfix">
        <div class="al-copy"><a href="https://www.ArioDevelope.com" translate>
          www.hss.com</a></div>
      </div>
    </footer>
    <ba-back-top position="200"></ba-back-top>
  `
})
export class Pages {

  jwthelper: JwtHelper;
  user: User;
  currentAuth: Authentication = new Authentication();


  mnuHome: any = {
    path: 'home',
    data: {
      menu: {
        title: 'Home',
        selected: false,
        expanded: false,
        order: 0,
      },
    },
    children: []
  }


  mnuHomeDashboard: any = {
    path: 'homedashboard',
    data: {
      menu: {
        title: 'میزکار',
        selected: false,
        expanded: false,
        order: 0,
      },
    },
  }

  mnuHomeNewsFeed: any = {
    path: 'homenewsfeed',
    data: {
      menu: {
        title: 'News Feed',
        selected: false,
        expanded: false,
        order: 0,
      },
    },
  }

  mnuHomeChatter: any = {
    path: 'homechatter',
    data: {
      menu: {
        title: 'Chatter',
        selected: false,
        expanded: false,
        order: 0,
      },
    },
  }

  mnuHomeTaskPanel: any = {
    path: 'hometaskpanel',
    data: {
      menu: {
        title: 'Task Panel',
        selected: false,
        expanded: false,
        order: 0,
      },
    },
  }

  mnuHomeTeamCalender: any = {
    path: 'hometeamcalender',
    data: {
      menu: {
        title: 'Team Calender',
        selected: false,
        expanded: false,
        order: 0,
      },
    },
  }

  mnuProject: any = {
    path: 'project',
    data: {
      menu: {
        title: 'Project',
        selected: false,
        expanded: false,
        order: 0,
      },
    },
  }

  mnuUserAndRolesPage: any = {
    path: 'userAndRolesPage',
    data: {
      menu: {
        title: 'UserAndRoles',
        selected: false,
        expanded: false,
        order: 0,
      },
    },
    children: [],
  }

  mnuUserAndRoles: any = {
    path: 'userAndRoles',
    data: {
      menu: {
        title: 'UserAndRoles',
        selected: false,
        expanded: false,
        order: 0,
      },
    },
  }

  mnuTeam: any = {
    path: '' +
    '',
    data: {
      menu: {
        title: 'Team',
        selected: false,
        expanded: false,
        order: 0,
      },
    },
  }

  mnuSchedule: any = {
    path: 'schedule',
    data: {
      menu: {
        title: 'schedule',
        selected: false,
        expanded: false,
        order: 0,
      },
    },
  }

  mnuDashboard: any = {
    path: 'dashboard',
    data: {
      menu: {
        title: 'میزکار',
        selected: false,
        expanded: false,
        order: 0,
      },
    },
  }


  mnuClientList: any = {
    path: 'clientsMenu',
    data: {
      menu: {
        title: 'Client List',
        selected: false,
        expanded: false,
        order: 0,
      },
    },
    children: [],
  }

  mnuProfileInfo: any = {
    path: 'profileInfo',
    data: {
      menu: {
        title: 'Profile Info',
        selected: false,
        expanded: false,
        order: 0,
      },
    },
  }

  mnuHealthDetails: any = {
    path: 'healthdetails',
    data: {
      menu: {
        title: 'Health Details',
        selected: false,
        expanded: false,
        order: 0,
      },
    },
  }


  mnuTenancyDetails: any = {
    path: 'tenancydetails',
    data: {
      menu: {
        title: 'Tenancy Details',
        selected: false,
        expanded: false,
        order: 0,
      },
    },
  }

  mnuIncomes: any = {
    path: 'incomes',
    data: {
      menu: {
        title: 'Incomes',
        selected: false,
        expanded: false,
        order: 0,
      },
    },
  }

  mnuReferalApplicationDetails: any = {
    path: 'referalapplicationdetails',
    data: {
      menu: {
        title: 'Referal Application Details',
        selected: false,
        expanded: false,
        order: 0,
      },
    },
  }

  mnuRiskAndNeedsAssesments: any = {
    path: 'riskandneedsassesments',
    data: {
      menu: {
        title: 'Risk And Needs Assesments',
        selected: false,
        expanded: false,
        order: 0,
      },
    },
  }

  mnuAreasOfRecovery: any = {
    path: 'areasofrecovery',
    data: {
      menu: {
        title: 'Areas Of Recovering',
        selected: false,
        expanded: false,
        order: 0,
      },
    },
  }

  mnuGoal: any = {
    path: 'goal',
    data: {
      menu: {
        title: 'Goal',
        selected: false,
        expanded: false,
        order: 0,
      },
    },
  }

  mnuNotes: any = {
    path: 'notes',
    data: {
      menu: {
        title: 'Notes',
        selected: false,
        expanded: false,
        order: 0,
      },
    },
  }

  mnuInvestigationAndIncidents: any = {
    path: 'investigationandincidents',
    data: {
      menu: {
        title: 'Investigation And Incidents',
        selected: false,
        expanded: false,
        order: 0,
      },
    },
  }

  mnuContact: any = {
    path: 'contact',
    data: {
      menu: {
        title: 'Contact',
        selected: false,
        expanded: false,
        order: 0,
      },
    },
  }

  mnuDocumentLibrary: any = {
    path: 'documentlibrary',
    data: {
      menu: {
        title: 'Document Library',
        selected: false,
        expanded: false,
        order: 0,
      },
    },
  }

  mnuActionLog: any = {
    path: 'actionlog',
    data: {
      menu: {
        title: 'Action Log',
        selected: false,
        expanded: false,
        order: 0,
      },
    },
  }

  mnuReporting: any = {
    path: 'reporting',
    data: {
      menu: {
        title: 'Reporting',
        selected: false,
        expanded: false,
        order: 0,
      },
    },
    children: [],
  }

  mnuContacts: any = {
    path: 'contacts',
    data: {
      menu: {
        title: 'Contacts',
        selected: false,
        expanded: false,
        order: 0,
      },
    },
    children: [],
  }
  mnuManagement: any = {
    path: 'management',
    data: {
      menu: {
        title: 'مدیریت بازیکنان',
        selected: false,
        expanded: false,
        order: 0,
      },
    },
    children: [],
  }
  mnuPlayer: any = {
    path: 'player',
    data: {
      menu: {
        title: 'بازیکنان',
        selected: false,
        expanded: false,
        order: 0,
      },
    },
    children: [],
  }
  mnuPlayGroups: any = {
    path: 'PlayGroups',
    data: {
      menu: {
        title: 'گروه های ورزشی',
        selected: false,
        expanded: false,
        order: 0,
      },
    },
    children: [],
  }
  mnuKpi: any = {
    path: 'kpi',
    data: {
      menu: {
        title: 'Kpi',
        selected: false,
        expanded: false,
        order: 0,
      },
    },
  };

 constructor(private _menuService: BaMenuService,
             private _userService: UserService,private translate: TranslateService) {

  }

  ngOnInit() {
    this.jwthelper = new JwtHelper();
    this.currentAuth = (JSON.parse((localStorage.getItem('Authentication'))) as Authentication)
    const token = this.currentAuth.access_token ;
    const tokenDecode = this.jwthelper.decodeToken(token);
    const serialNumber = tokenDecode.certserialnumber;
    const searchModel = new SearchModel();
    searchModel.serialNumber = serialNumber;
    this.mnuDashboard.data.menu.title = this.translate.instant('general.menu.dashboard');
    const objects = {
      path: 'pages',
      children: [],
    }
    for (const x of PAGES_MENU) {
      PAGES_MENU.pop();
    }
    // objects.children.push(mnuDashboard);
    // objects.children.push(mnuMessages);
    // objects.children.push(mnuProfile);

    {
      // objects.children.push(this.mnuDashboard);
      objects.children.push(this.mnuManagement);
      this.mnuManagement.children.push(this.mnuPlayer);
      this.mnuManagement.children.push(this.mnuPlayGroups);

      // objects.children.push(this.mnuHome);
      // this.mnuHome.children.push(this.mnuHomeDashboard);
      // this.mnuHome.children.push(this.mnuHomeNewsFeed);
      // this.mnuHome.children.push(this.mnuHomeChatter);
      // this.mnuHome.children.push(this.mnuHomeTaskPanel);
      // this.mnuHome.children.push(this.mnuHomeTeamCalender);

      // objects.children.push(this.mnuNewsFeed);
      // objects.children.push(this.mnuChatter);
      // objects.children.push(this.mnuTaskPanel);
      // objects.children.push(this.mnuTeamCalender);
      // objects.children.push(this.mnuTeam);
      // objects.children.push(this.mnuProject);
      // objects.children.push(this.mnuUserAndRolesPage);
      // this.mnuUserAndRolesPage.children.push(this.mnuUserAndRoles);
      // this.mnuUserAndRolesPage.children.push(this.mnuTeam);
      // objects.children.push(this.mnuSchedule);
      // objects.children.push(this.mnuDashboard);
      // objects.children.push(this.mnuClientList);
      // this.mnuClientList.children.push(this.mnuProfileInfo);
      // this.mnuClientList.children.push(this.mnuHealthDetails);
      // this.mnuClientList.children.push(this.mnuTenancyDetails);
      // this.mnuClientList.children.push(this.mnuIncomes);
      // this.mnuClientList.children.push(this.mnuReferalApplicationDetails);
      // this.mnuClientList.children.push(this.mnuRiskAndNeedsAssesments);
      // this.mnuClientList.children.push(this.mnuAreasOfRecovery);
      // this.mnuClientList.children.push(this.mnuGoal);
      // this.mnuClientList.children.push(this.mnuNotes);
      // this.mnuClientList.children.push(this.mnuInvestigationAndIncidents);
      // this.mnuClientList.children.push(this.mnuContact);
      // this.mnuClientList.children.push(this.mnuDocumentLibrary);
      // this.mnuClientList.children.push(this.mnuActionLog);
      // objects.children.push(this.mnuReporting);
      // this.mnuReporting.children.push(this.mnuKpi);
      // objects.children.push(this.mnuContacts);

      // <---------------------------------->
      if (this.currentAuth.roles.indexOf("admin") > -1)

      {
        // this.objects.children.push(this.mnuProfile);


      }
      else if (this.currentAuth.roles.indexOf("sw") > -1)
      {

      }
      PAGES_MENU.push(objects);
    }
    this._menuService.updateMenuByRoutes(<Routes>PAGES_MENU);
  }
}
