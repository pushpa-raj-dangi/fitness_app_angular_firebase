import { Observable, Subscription, switchMap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

import {
  Workout,
  WorkOutsService,
} from './../../../shared/services/workouts/workouts.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss'],
})
export class WorkoutComponent implements OnInit, OnDestroy {
  workout$!: Observable<Workout>;
  subscription!: Subscription;

  constructor(
    private workoutService: WorkOutsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnDestroy(): void {}
  ngOnInit(): void {
    this.subscription = this.workoutService.workouts$.subscribe();
    this.workout$ = this.route.params.pipe(
      switchMap((param: any) => {
        return this.workoutService.getWorkout(param['id']);
      })
    );
    console.log(this.workout$);
  }
  async addWorkot(workout: any) {
    await this.workoutService.addWorkout(workout);
    this.backToWorkout();
  }

  async removeWorkout(workout: Workout) {
    const key = this.route.snapshot.params['id'];
    await this.workoutService.removeWorkout(workout);
    this.backToWorkout();
  }

  async updateWorkout(workout: Workout) {
    const key = this.route.snapshot.params['id'];
    await this.workoutService.updateWorkout(key, workout);

    this.backToWorkout();
  }

  private backToWorkout() {
    this.router.navigate(['/workouts']);
  }
}
