import { filter, map, Observable, of, tap } from 'rxjs';

import { AuthService } from './../../../../auth/shared/services/auth.service';
import { Store } from 'src/store';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireDatabase } from '@angular/fire/compat/database';

export interface Meal {
  name: string;
  ingredients: string[];
  timestamp: number;
  $key: string;
  $exists: () => boolean;
}

@Injectable()
export class MealService {
  id: any = '';
  mealRef!: any;

  meals$!: Observable<Meal[]>;

  constructor(
    private store: Store,
    // public db: AngularFirestore,
    private authService: AuthService,
    private db: AngularFireDatabase
  ) {
    this.authService.userId.then((x) => {
      this.id = x;
      // this.mealRef = this.db
      //   .list('meals')
      //   .doc(x)
      //   .collection<Meal>('items');

      let meals: Meal[] = [];
      this.mealRef = this.db.list(`meals/${x}/items`);
      // this.meals$ = this.mealRef
      //   .valueChanges()
      //   .pipe(tap((next: Meal) => this.store.set('meals', next)));
      this.meals$ = this.mealRef.snapshotChanges().pipe(
        map((mutation: any[]) => {
          meals = mutation.map((x) => {
            return {
              $key: x.key,
              ...x.payload.val(),
            };
          });
          this.store.set('meals', meals);
        })
      );
    });
  }

  // get uid() {
  //   let id;
  //   this.authService.userId.then((x) => {
  //     id = x;
  //     this.id = x;
  //   });
  //   return id;

  //   // return this.authService.userId;
  // }

  addMeal(meal: Meal) {
    console.log('addMeal', this.id);
    // let ref = this.db
    //   .collection('/meals')
    //   .doc(this.id)
    //   .collection('/invoices')
    //   .ref.doc().id;

    return this.db.list(`meals/${this.id}/items`).push(meal);
  }

  removeMeal(key: Meal) {
    return this.db.list(`meals/${this.id}/items`).remove(key.$key);
  }

  updateMeal(key: string, meal: Meal) {
    return this.db.object(`meals/${this.id}/items/${key}`).update(meal);
  }

  getMeal(id: string) {
    if (!id) return of({});

    return this.store
      .select<Meal[]>('meals')
      .pipe(filter(Boolean))
      .pipe(map((meals) => meals.find((meal: Meal) => meal.$key === id)));
  }
}
