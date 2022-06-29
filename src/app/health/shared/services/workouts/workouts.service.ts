import { filter, map, Observable, of } from 'rxjs';

import { AuthService } from './../../../../auth/shared/services/auth.service';
import { Store } from 'src/store';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

export interface Workout {
  name: string;
  type: string;
  strength: any;
  endurance: any;
  timestamp: number;
  $key: string;
  $exists: () => boolean;
}

@Injectable()
export class WorkOutsService {
  id: any = '';
  workouts!: any;

  workouts$!: Observable<Workout[]>;

  constructor(
    private store: Store,
    private authService: AuthService,
    private db: AngularFireDatabase
  ) {
    this.authService.userId.then((x) => {
      this.id = x;

      let workouts: Workout[] = [];
      this.workouts = this.db.list(`workouts/${x}/items`);

      this.workouts$ = this.workouts.snapshotChanges().pipe(
        map((mutation: any[]) => {
          workouts = mutation.map((x) => {
            return {
              $key: x.key,
              ...x.payload.val(),
            };
          });
          this.store.set('workouts', workouts);
        })
      );
    });
  }

  addWorkout(workout: Workout) {
    return this.db.list(`workouts/${this.id}/items`).push(workout);
  }

  removeWorkout(key: Workout) {
    return this.db.list(`workouts/${this.id}/items`).remove(key.$key);
  }

  updateWorkout(key: string, workout: Workout) {
    return this.db.object(`workouts/${this.id}/items/${key}`).update(workout);
  }
  getWorkout(id: string) {
    if (!id) return of({});

    return this.store
      .select<Workout[]>('workouts')
      .pipe(filter(Boolean))
      .pipe(
        map((workouts) =>
          workouts.find((workout: Workout) => workout.$key === id)
        )
      );
  }
}
