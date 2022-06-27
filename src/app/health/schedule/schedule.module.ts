import { RouterModule, Routes } from '@angular/router';
import { ScheduleComponent } from './containers/schedule/schedule.component';
import { NgModule } from '@angular/core';
const ROUTES: Routes = [{ path: '', component: ScheduleComponent }];

@NgModule({
  declarations: [ScheduleComponent],
  imports: [RouterModule.forChild(ROUTES)],
  providers: [],
})
export class ScheduleModule {}
