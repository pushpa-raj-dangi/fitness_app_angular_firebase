import {
  Workout,
  WorkOutsService,
} from './../../../shared/services/workouts/workouts.service';
import { Store } from 'src/store';
import { Observable, Subscription } from 'rxjs';

import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.scss'],
})
export class WorkoutsComponent implements OnInit, OnDestroy {
  workouts$!: Observable<Workout[]>;
  subscription!: Subscription;

  constructor(private workoutService: WorkOutsService, private store: Store) {}

  ngOnInit(): void {
    this.workouts$ = this.store.select<Workout[]>('workouts');
    this.subscription = this.workoutService.workouts$.subscribe();
    console.log(this.workouts$);

    this.workoutService.workouts$.subscribe();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  async remove(item: Workout) {
    await this.workoutService.removeWorkout(item);
  }
}
