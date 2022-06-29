import { Workout } from './../../services/workouts/workouts.service';
import { Meal } from './../../services/meals/meal.service';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'list-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent {
  toggled = false;
  @Input() item!: Meal | Workout | any;
  @Output() remove = new EventEmitter<any>();

  constructor() {}

  getRoute(item: any) {
    return [`../${item.ingredients ? 'meals' : 'workouts'}`, item.$key];
  }

  removeItem() {
    this.remove.emit(this.item);
  }
  toggle() {
    this.toggled = !this.toggled;
  }
}
