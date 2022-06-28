import { Observable, Subscription, switchMap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

import {
  Meal,
  MealService,
} from './../../../shared/services/meals/meal.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss'],
})
export class MealComponent implements OnInit, OnDestroy {
  meal$!: Observable<Meal>;
  subscription!: Subscription;

  constructor(
    private mealService: MealService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnDestroy(): void {}
  ngOnInit(): void {
    this.subscription = this.mealService.meals$.subscribe();
    this.meal$ = this.route.params.pipe(
      switchMap((param: any) => {
        return this.mealService.getMeal(param['id']);
      })
    );
    console.log(this.meal$);
  }
  addMeal(meal: any) {
    this.mealService.addMeal(meal);
    this.router.navigate(['/meals']);
  }
}
