import { SharedModule } from './../shared/shared.module';
import { RegisterComponent } from './containers/register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

const ROUTES: Routes = [
  {
    path: '',
    component: RegisterComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTES), SharedModule],
  declarations: [RegisterComponent],
  exports: [],
  providers: [],
})
export class RegisterModule {}
