import { SharedModule } from './../auth/shared/shared.module';
import { AuthGuard } from './../auth/shared/guards/auth.guard';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const ROUTES: Routes = [
  {
    path: 'schedule',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./schedule/schedule.module').then((m) => m.ScheduleModule),
  },
  {
    path: 'meals',
    canActivate: [AuthGuard],

    loadChildren: () =>
      import('./meals/meals.module').then((m) => m.MealsModule),
  },
  {
    path: 'workouts',
    canActivate: [AuthGuard],

    loadChildren: () =>
      import('./workouts/workouts.module').then((m) => m.WorkoutsModule),
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    SharedModule.forRoot(),
  ],
})
export class HealthModule {}
