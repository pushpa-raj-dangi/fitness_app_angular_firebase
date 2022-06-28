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
  @Input() item!: Meal;
  @Output() remove = new EventEmitter<any>();

  constructor() {}

  getRoute(item: any) {
    return [`../meals`, item.$key];
  }

  removeItem() {
    this.remove.emit(this.item);
  }
  toggle() {
    this.toggled = !this.toggled;
  }
}
