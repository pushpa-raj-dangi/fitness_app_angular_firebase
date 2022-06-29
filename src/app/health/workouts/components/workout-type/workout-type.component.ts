import { ChangeDetectionStrategy, Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
export const TYPE_CONTROL_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => WorkoutTypeComponent),
  multi: true,
};
@Component({
  selector: 'workout-type',
  providers: [TYPE_CONTROL_ACCESSOR],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './workout-type.component.html',
  styleUrls: ['./workout-type.component.scss'],
})
export class WorkoutTypeComponent implements ControlValueAccessor {
  value!: string;
  selectors = ['strength', 'endurance'];

  private onTouch!: Function;
  private onModelChange!: Function;

  writeValue(obj: any): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onModelChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  setSelected(item: any) {
    this.value = item;
    this.onModelChange(this.value);
  }
}
