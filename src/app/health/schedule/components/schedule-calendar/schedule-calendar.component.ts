import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  ScheduleItem,
  ScheduleList,
} from 'src/app/health/shared/services/schedule/schedule.service';

@Component({
  selector: 'app-schedule-calendar',
  templateUrl: './schedule-calendar.component.html',
  styleUrls: ['./schedule-calendar.component.scss'],
})
export class ScheduleCalendarComponent implements OnInit, OnChanges {
  selectedDate!: any;

  selectedDayIndex!: number;
  selectedWeek!: Date;
  selectedDay!: Date;

  sections = [
    { key: 'morning', name: 'Morning' },
    { key: 'launch', name: 'Launch' },
    { key: 'evening', name: 'Evening' },
    { key: 'snacks', name: 'Snacks and Drinks' },
  ];

  @Output() change = new EventEmitter<Date>();
  @Output() select = new EventEmitter<any>();

  @Input()
  set date(date: any) {
    this.selectedDate = new Date(date.getTime());
  }

  @Input()
  items!: any;

  constructor() {
    this.date = new Date();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.selectedDayIndex = this.getToday(this.selectedDate);
    this.selectedWeek = this.getStartOfWeek(new Date(this.selectedDate));
  }

  selectDay(event: number) {
    const selectedDay = new Date(this.selectedWeek);
    selectedDay.setDate(selectedDay.getDate() + event);
    this.change.emit(selectedDay);
  }

  getToday(day: Date) {
    let today = day.getDay() - 1;
    if (today < 0) {
      today = 6;
    }
    return today;
  }

  onChange(weekOffSet: number) {
    const startOfWeek = this.getStartOfWeek(new Date());
    const startDate = new Date(
      startOfWeek.getFullYear(),
      startOfWeek.getMonth(),
      startOfWeek.getDate()
    );

    startDate.setDate(startDate.getDate() + weekOffSet * 7);
    this.change.emit(startDate);
  }

  getSection(name: string): ScheduleItem {
    return (this.items && this.items[name]) || {};
  }

  private getStartOfWeek(date: Date) {
    const day = date.getDay();
    const diff = date.getDate() - day + (day === 0 ? -6 : 1);
    return new Date(date.setDate(diff));
  }
  selectSection({ type, assigned, data }: any, section: string) {
    const day = this.selectedDate;
    console.log('dataeeeeee', day);

    this.select.emit({
      type,
      assigned,
      section,
      day,
      data,
    });
  }

  ngOnInit(): void {}
}
