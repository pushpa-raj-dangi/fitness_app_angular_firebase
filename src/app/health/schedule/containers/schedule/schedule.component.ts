import {
  Workout,
  WorkOutsService,
} from './../../../shared/services/workouts/workouts.service';
import {
  Meal,
  MealService,
} from './../../../shared/services/meals/meal.service';
import { Store } from 'src/store';
import {
  ScheduleItem,
  ScheduleService,
} from './../../../shared/services/schedule/schedule.service';
import { Observable, Subscription } from 'rxjs';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-schedule',
  styleUrls: ['./schedule.component.scss'],
  templateUrl: './schedule.component.html',
})
export class ScheduleComponent implements OnInit, OnDestroy {
  open = false;
  date$!: Observable<Date>;
  subscription: Subscription[] = [];
  schedule$!: Observable<ScheduleItem[]>;
  selected$!: Observable<any>;
  list$!: Observable<Meal[] | Workout[]>;

  constructor(
    private store: Store,
    private scheduleService: ScheduleService,
    private mealService: MealService,
    private workoutService: WorkOutsService
  ) {}

  ngOnInit(): void {
    this.date$ = this.store.select('date');
    this.schedule$ = this.store.select('schedule');
    this.selected$ = this.store.select('selected');
    this.list$ = this.store.select('list');

    this.subscription = [
      this.scheduleService.schedule$.subscribe(),
      this.scheduleService.selected$.subscribe(),
      this.scheduleService.items$.subscribe(),
      this.mealService.meals$.subscribe(),
      this.workoutService.workouts$.subscribe(),
      this.scheduleService.list$.subscribe(),
    ];
  }

  ngOnDestroy(): void {
    this.subscription.forEach((sub) => sub.unsubscribe());
  }

  changeDate(date: Date) {
    this.scheduleService.updateDate(date);
  }
  changeSection(event: any) {
    console.log(event);

    this.open = true;

    this.scheduleService.selectSection(event);
  }

  assignItem(event: string[]) {
    this.scheduleService.updateItems(event);
    this.closeAssign();
  }
  closeAssign() {
    this.open = false;
  }
}
