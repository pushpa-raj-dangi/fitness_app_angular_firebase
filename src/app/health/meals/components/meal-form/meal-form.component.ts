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
  Output,
} from '@angular/core';

@Component({
  selector: 'meal-form',
  templateUrl: './meal-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./meal-form.component.scss'],
})
export class MealFormComponent {
  form = this.fb.group({
    name: ['', Validators.required],
    ingredients: this.fb.array(['']),
  });
  @Output() meal = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {}

  addIngredient() {
    this.ingredients.push(new FormControl(''));
  }

  createMeal() {
    if (this.form.valid) {
      this.meal.emit(this.form.value);
    }
  }

  removeIngredient(index: number) {
    this.ingredients.removeAt(index);
  }

  get ingredients() {
    return this.form.get('ingredients') as FormArray;
  }

  get required() {
    return (
      this.form.get('name')?.hasError('required') &&
      this.form.get('name')?.touched
    );
  }
}
