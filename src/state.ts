import { User } from './app/auth/shared/services/auth.service';

export interface State {
  user: User | any;
  [key: string]: any;
}
