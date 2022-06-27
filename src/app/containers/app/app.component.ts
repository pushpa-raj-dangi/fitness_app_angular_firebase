import { Router } from '@angular/router';
import { map, Observable, Subscription } from 'rxjs';
import { AuthService, User } from './../../auth/shared/services/auth.service';
import { Store } from './../../../store';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  user$!: Observable<User>;
  subscription!: Subscription;
  constructor(
    private store: Store,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.subscription = this.authService.auth$.subscribe();
    this.user$ = this.store.select<User>('user');
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  async onLogout() {
    await this.authService.logout();
    this.router.navigate(['/auth/login']);
  }
}
