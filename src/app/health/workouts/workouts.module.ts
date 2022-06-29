import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { WorkoutsComponent } from './containers/workouts/workouts.component';
import { WorkoutComponent } from './containers/workout/workout.component';
import { WorkoutFormComponent } from './components/workout-form/workout-form.component';
import { WorkoutTypeComponent } from './components/workout-type/workout-type.component';

const ROUTES: Routes = [
  {
    path: '',
    component: WorkoutsComponent,
  },
  {
    path: 'new',
    component: WorkoutComponent,
  },
  {
    path: ':id',
    component: WorkoutComponent,
  },
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES),
    SharedModule.forRoot(),
  ],
  declarations: [
    WorkoutsComponent,
    WorkoutComponent,
    WorkoutFormComponent,
    WorkoutTypeComponent,
  ],
})
export class WorkOutsModule {}
