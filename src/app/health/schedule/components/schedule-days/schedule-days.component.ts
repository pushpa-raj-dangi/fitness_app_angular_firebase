import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-schedule-days',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './schedule-days.component.html',
  styleUrls: ['./schedule-days.component.scss'],
})
export class ScheduleDaysComponent implements OnInit {
  @Input()
  selected!: number;

  @Output() select = new EventEmitter<number>();

  days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

  constructor() {}

  selectDay(i: number) {
    this.select.emit(i);
  }

  ngOnInit(): void {}
}
