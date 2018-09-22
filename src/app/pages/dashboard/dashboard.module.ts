import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../app.translation.module';
import { NgaModule } from '../../theme/nga.module';

import { Dashboard } from './dashboard.component';
import { routing }       from './dashboard.routing';

import { PopularApp } from './popularApp';
import { UsersMap } from './usersMap';
import { LineChart } from './lineChart';
import { Feed } from './feed';
import { Todo } from './todo';
import { Calendar } from './calendar';
import { CalendarService } from './calendar/calendar.service';
import { FeedService } from './feed/feed.service';
import { LineChartService } from './lineChart/lineChart.service';
import { TodoService } from './todo/todo.service';
import { UsersMapService } from './usersMap/usersMap.service';
import {
    DataTableModule, DropdownModule, FieldsetModule, GrowlModule, MessagesModule,
    PanelModule
} from 'primeng/primeng';
import {MyDatePickerModule} from "mydatepicker";
import {FileUploadModule} from "primeng/components/fileupload/fileupload";
import {AttachmentsModule} from '../generic/components/attachments.module';
import {ConfirmationPopoverModule} from "angular-confirmation-popover";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppTranslationModule,
    NgaModule,
    routing,
      DataTableModule,
      DropdownModule,
      GrowlModule,
      MessagesModule,
      MyDatePickerModule,
      FieldsetModule,
      PanelModule,
      FileUploadModule,
      AttachmentsModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'warning', // set defaults here
    })
  ],
  declarations: [
    PopularApp,
    UsersMap,
    LineChart,
    Feed,
    Todo,
    Calendar,
    Dashboard,
  ],
  providers: [
    CalendarService,
    FeedService,
    LineChartService,
    TodoService,
    UsersMapService,
  ],
})
export class DashboardModule {}
