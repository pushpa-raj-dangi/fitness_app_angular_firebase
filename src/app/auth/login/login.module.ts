import { SharedModule } from './../shared/shared.module';
import { LoginComponent } from './containers/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

const ROUTES: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTES), SharedModule],
  declarations: [LoginComponent],
  exports: [],
  providers: [],
})
export class LoginModule {}
