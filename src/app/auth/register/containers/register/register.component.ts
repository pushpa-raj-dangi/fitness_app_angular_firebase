import { AuthService } from './../../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  error: any;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  async registerUser(event: FormGroup) {
    const { email, password } = event.value;
    try {
      await this.authService.register(email, password);
    } catch (error: any) {
      this.error = error.message;
    }
  }
}
