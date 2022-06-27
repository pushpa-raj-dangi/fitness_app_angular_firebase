import { Router } from '@angular/router';
import { AuthService } from './../../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Tracing } from 'trace_events';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  error: any;

  ngOnInit(): void {}

  async loginUser(event: FormGroup) {
    try {
      await this.authService.login(event.value.email, event.value.password);
      this.router.navigate(['/']);
    } catch (error: any) {
      console.log(error.message);

      this.error = error.messge;
    }
  }
}
