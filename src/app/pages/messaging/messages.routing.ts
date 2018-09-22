import { Routes, RouterModule }  from '@angular/router';
import {MessagesComponent} from './messages.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
    {
        path: '',
        component: MessagesComponent,
    },

];

export const routing = RouterModule.forChild(routes);
