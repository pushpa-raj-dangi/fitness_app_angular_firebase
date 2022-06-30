import { ScheduleSection } from './components/schedule-section/schedule-section.component';
import { RouterModule, Routes } from '@angular/router';
import { ScheduleComponent } from './containers/schedule/schedule.component';
import { NgModule } from '@angular/core';
import { ScheduleCalendarComponent } from './components/schedule-calendar/schedule-calendar.component';
import { ScheduleDaysComponent } from './components/schedule-days/schedule-days.component';
import { ScheduleControlsComponent } from './components/schedule-controls/schedule-controls.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ScheduleAssign } from './components/schedule-assign/schedule-assign.component';
const ROUTES: Routes = [{ path: '', component: ScheduleComponent }];

@NgModule({
  declarations: [
    ScheduleComponent,
    ScheduleCalendarComponent,
    ScheduleDaysComponent,
    ScheduleControlsComponent,
    ScheduleSection,
    ScheduleAssign,
  ],
  imports: [
    CommonModule,
    SharedModule.forRoot(),
    RouterModule.forChild(ROUTES),
  ],
  providers: [],
})
export class ScheduleModule {}
