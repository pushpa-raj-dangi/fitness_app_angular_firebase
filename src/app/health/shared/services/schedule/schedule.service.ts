import { AuthService } from './../../../../auth/shared/services/auth.service';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Workout } from './../workouts/workouts.service';
import { Meal } from './../meals/meal.service';
import { Store } from 'src/store';
import {
  BehaviorSubject,
  map,
  Observable,
  Subject,
  switchMap,
  tap,
  withLatestFrom,
} from 'rxjs';
import { Injectable } from '@angular/core';

export interface ScheduleItem {
  meals: Meal[];
  workouts: Workout[];
  section: string;
  timestamp: number;
  $key?: string;
}

export interface ScheduleList {
  morning?: ScheduleItem;
  launch?: ScheduleItem;
  evening?: ScheduleItem;
  snacks?: ScheduleItem;
  [key: string]: any;
}

@Injectable()
export class ScheduleService {
  id: any;
  constructor(
    private store: Store,
    private db: AngularFireDatabase,
    private authService: AuthService
  ) {
    this.authService.userId.then((x) => {
      this.id = x;
    });
  }

  updateDate(date: Date) {
    this.date$.next(date);
  }

  private section$ = new Subject();
  private itemList$ = new Subject();

  selected$ = this.section$
    .pipe(map((value: any) => this.store.value[value.type]))
    .pipe(tap((next) => this.store.set('selected', next)));

  list$ = this.section$.pipe(tap((next) => this.store.set('list', next)));
  items$ = this.section$.pipe(withLatestFrom(this.section$)).pipe(
    map(([items, section]: any[]) => {
      const id = section.data.$key;
      const defaults: ScheduleItem = {
        workouts: [],
        meals: [],
        section: section.section,
        timestamp: new Date(section.day).getTime(),
      };

      const payload = {
        ...(id ? section.data : defaults),
        ...items,
      };

      if (id) {
        return this.updateSection(id, payload);
      } else {
        return this.createSection(payload);
      }
    })
  );

  private date$ = new BehaviorSubject(new Date());
  schedule$: Observable<ScheduleItem[]> = this.date$
    .pipe(tap((next: any) => this.store.set('date', next)))
    .pipe(
      map((day: any) => {
        const startAt = new Date(
          day.getFullYear(),
          day.getMonth(),
          day.getDate()
        ).getTime();

        const endAt =
          new Date(day.getFullYear(), day.getMonth(), day.getDate()).getTime() -
          1;
        return { startAt, endAt };
      })
    )
    .pipe(switchMap(({ startAt, endAt }) => this.getSchedule(startAt, endAt)))
    .pipe(
      map((data: any) => {
        console.log(data);

        const mapped: ScheduleList = {};
        for (const prop of data) {
          if (!mapped[prop.section]) {
            mapped['prop.section'] = prop;
          }
        }
        return mapped;
      })
    )
    .pipe(tap((next: any) => this.store.set('schedule', next)));

  private async getSchedule(startAt: number, endAt: number) {
    return await this.db
      .list(`schedule/${this.id}/items`)
      .query.orderByChild('requestTimeStemp')
      .startAt(startAt)
      .endAt(endAt)
      .toJSON();
  }

  selectSection(event: any) {
    this.section$.next(event);
  }

  updateItems(item: string[]) {
    this.itemList$.next(item);
  }

  updateSection(key: string, payload: ScheduleItem) {
    return this.db.object(`schdule/${this.id}/items/${key}`).update(payload);
  }
  createSection(item: any) {
    return this.db.list(`schedule/${this.id}/items`).push(item);
  }
}
