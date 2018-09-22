import { Routes, RouterModule } from '@angular/router';
import { Pages } from './pages.component';
import { ModuleWithProviders } from '@angular/core';
import { ProfileComponent } from './profile/components/profile.component';
import {PermissionComponent} from "./permission/components/permission.component";
export const routes: Routes = [
    {
        path: 'login',
        loadChildren: 'app/pages/login/login.module#LoginModule',
    },
  {


    path: 'pages',
    component: Pages,
    children: [
        { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      // { path: 'home', loadChildren: './home/home.module#HomeModule' },
      // { path: 'contacts', loadChildren: './contacts/contacts.module#ContactsModule' },
      // { path: 'project', loadChildren: './project/project.module#ProjectModule' },
      // { path: 'userAndRolesPage', loadChildren: './usersandroles/userAndRoles.module#UsersAndRolesModule' },
      // { path: 'schedule', loadChildren: './schedule/schedule.module#ScheduleModule' },
      { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
      { path: 'management', loadChildren: './management/management.module#ManagementModule' },


      // { path: 'permission', component: PermissionComponent },
      // { path: 'reporting', loadChildren: './reporting/reporting.module#ReportingModule' },
      // { path: 'clientsMenu', loadChildren: './clients/clients.module#ClientsMenuModule' },
    ],
  },
];


export const routing: ModuleWithProviders = RouterModule.forChild(routes);
