import { Meal } from './app/health/shared/services/meals/meal.service';
import { User } from './app/auth/shared/services/auth.service';

export interface State {
  meals: Meal[] | any;
  user: User | any;
  [key: string]: any;
}
