import { Workout } from './../../../shared/services/workouts/workouts.service';
import { Meal } from './../../../shared/services/meals/meal.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'schedule-assign',
  templateUrl: './schedule-assign.component.html',
  styleUrls: ['./schedule-assign.component.scss'],
})
export class ScheduleAssign implements OnInit {
  selected!: string[];

  @Output() update = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<any>();

  @Input()
  section!: any;
  @Input() list!: Meal[] | Workout[] | any;

  getRoute(name: string) {
    return [`../${name}/new`];
  }

  ngOnInit(): void {
    this.selected = [...this.section.assigned];
  }
  exists(name: any) {
    return !!~this.selected.indexOf(name);
  }

  updateAssign() {
    this.update.emit({
      [this.section.type]: this.selected,
    });
  }
  cancelAssign() {
    this.cancel.emit();
  }
  toggleItem(name: string) {
    if (this.exists(name)) {
      this.selected = this.selected.filter((item) => item !== name);
    }
    {
      this.selected = [...this.selected, name];
    }
  }
}
