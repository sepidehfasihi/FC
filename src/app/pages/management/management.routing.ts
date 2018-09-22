import { Routes, RouterModule }  from '@angular/router';
import {ManagementComponent} from "./management.component";
import {PlayerComponent} from "./components/player.component";
import {PlayerGroupsComponent} from "./components/playerGroups.component";

const routes: Routes = [
  {
    path: '',
    component: ManagementComponent,
    children: [
      { path: 'player', component: PlayerComponent },
      { path: 'PlayGroups', component: PlayerGroupsComponent },
    ],
  },

];

export const managementRouting = RouterModule.forChild(routes);
