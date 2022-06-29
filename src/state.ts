import { Workout } from './app/health/shared/services/workouts/workouts.service';
import { Meal } from './app/health/shared/services/meals/meal.service';
import { User } from './app/auth/shared/services/auth.service';

export interface State {
  meals: Meal[] | any;
  workouts: Workout[] | any;
  user: User | any;
  [key: string]: any;
}
