import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { User } from 'src/app/auth/shared/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavComponent implements OnInit {
  @Input()
  user!: User | any;

  @Output()
  logout = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  logoutUser() {
    this.logout.emit();
  }
}
