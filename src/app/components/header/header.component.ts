import { User } from './../../auth/shared/services/auth.service';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
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
