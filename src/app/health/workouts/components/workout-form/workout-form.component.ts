import { Workout } from './../../../shared/services/workouts/workouts.service';
import { Meal } from './../../../shared/services/meals/meal.service';
import {
  FormArray,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'workout-form',
  templateUrl: './workout-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./workout-form.component.scss'],
})
export class WorkoutFormComponent implements OnChanges {
  toggled = false;
  exists = false;

  @Input()
  workout!: Workout;

  @Output() workoutFrom = new EventEmitter<Workout>();
  @Output() update = new EventEmitter<Workout>();
  @Output() create = new EventEmitter<Workout>();
  @Output() remove = new EventEmitter<Workout>();

  form = this.fb.group({
    name: ['', Validators.required],
    type: 'strength',
    strength: this.fb.group({
      reps: 0,
      sets: 0,
      weight: 0,
    }),
    endurance: this.fb.group({
      distance: 0,
      duration: 0,
    }),
  });

  constructor(private fb: FormBuilder) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.workout && this.workout.name) {
      this.exists = true;
      const value = this.workout;
      this.form.patchValue(value);
    }
  }

  get required() {
    return (
      this.form.get('name')?.hasError('required') &&
      this.form.get('name')?.touched
    );
  }

  createWorkout() {
    if (this.form.valid) {
      this.workoutFrom.emit(this.form.value);
    }
  }

  removeWorkout() {
    this.remove.emit(this.form.value);
  }

  updateWorkout() {
    if (this.form.valid) {
      this.update.emit(this.form.value);
    }
  }

  toggle() {
    this.toggled = !this.toggled;
  }

  get placeholder() {
    return `
        e.g.  ${
          this.form.get('type')?.value === 'strength'
            ? 'Benchpress'
            : 'Treadmill'
        }
    `;
  }
}
