import { ScheduleItem } from 'src/app/health/shared/services/schedule/schedule.service';
import { Workout } from './app/health/shared/services/workouts/workouts.service';
import { Meal } from './app/health/shared/services/meals/meal.service';
import { User } from './app/auth/shared/services/auth.service';

export interface State {
  meals: Meal[] | any;
  schedule: ScheduleItem[] | any;
  selected: any;
  list: any;
  date: Date | any;
  workouts: Workout[] | any;
  user: User | any;
  [key: string]: any;
}
