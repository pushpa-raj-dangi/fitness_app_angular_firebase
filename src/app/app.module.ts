import { Routes } from '@angular/router';
import { MealsModule } from './health/meals/meals.module';
import { HealthModule } from './health/health.module';
import { Store } from './../store';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './containers/app/app.component';
import { AuthModule } from './auth/auth.module';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, NavComponent],
  imports: [BrowserModule, AppRoutingModule, AuthModule, HealthModule],
  providers: [Store],
  bootstrap: [AppComponent],
})
export class AppModule {}

// Import the functions you need from the SDKs you need
