import { User } from 'src/app/auth/shared/services/auth.service';
import { AuthService } from './../services/auth.service';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}
  canActivate() {
    return this.authService.authState.pipe(
      map((user: any) => {
        if (!user) {
          this.router.navigate(['/auth/login']);
        }
        return !!user;
      })
    );
  }
}
