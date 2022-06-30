import { ScheduleItem } from 'src/app/health/shared/services/schedule/schedule.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'schedule-section',
  template: `
    <div class="mt-3"></div>
    <div class="border p-2 bg-primary text-light">
      {{ name | uppercase }}
    </div>
    <div
      *ngIf="section.meals; else addMeal"
      (click)="onSelect('meals', section.meals)"
    >
      <span> {{ section.meals | join }} </span>
    </div>
    <ng-template #addMeal>
      <div class="d-flex my-3 align-items-center" (click)="onSelect('meals')">
        <span
          class="btn d-flex me-2 justify-content-center align-items-center btn-outline-primary rounded-circle"
          style="height:35px;width:35px"
        >
          <i class="bi bi-plus-lg"></i>
        </span>
        <div>Assign Meal</div>
      </div>
    </ng-template>

    <div
      *ngIf="section.workouts; else addWorkout"
      (click)="onSelect('workouts', section.workouts)"
    >
      {{ name }}
      <span>
        {{ section.workouts | join }}
      </span>
    </div>
    <ng-template #addWorkout>
      <div
        class="d-flex my-3 align-items-center"
        (click)="onSelect('workouts')"
      >
        <span
          class="btn d-flex me-2 justify-content-center align-items-center btn-outline-primary rounded-circle"
          style="height:35px;width:35px"
        >
          <i class="bi bi-plus-lg"></i>
        </span>
        <div>Assign workout</div>
      </div>
    </ng-template>
  `,
  styles: [],
})
export class ScheduleSection {
  @Input() name!: string;
  @Input() section!: ScheduleItem;

  @Output() select = new EventEmitter<any>();

  onSelect(type: string, assigned: any[] = []) {
    const data = this.section;
    this.select.emit({
      type,
      assigned,
      data,
    });
  }
}
