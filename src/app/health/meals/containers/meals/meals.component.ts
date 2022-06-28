import { Store } from 'src/store';
import { Observable, Subscription } from 'rxjs';
import {
  Meal,
  MealService,
} from './../../../shared/services/meals/meal.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.scss'],
})
export class MealsComponent implements OnInit, OnDestroy {
  meals$!: Observable<Meal[]>;
  subscription!: Subscription;

  constructor(private mealService: MealService, private store: Store) {}

  ngOnInit(): void {
    this.meals$ = this.store.select<Meal[]>('meals');
    this.subscription = this.mealService.meals$.subscribe();
    console.log(this.meals$);

    this.mealService.meals$.subscribe();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  remove(item: Meal) {
    this.mealService.removeMeal(item);
  }
}
