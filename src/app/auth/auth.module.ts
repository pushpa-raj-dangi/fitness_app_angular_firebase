import { SharedModule } from './shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

const ROUTES: Routes = [
  {
    path: 'auth',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login',
      },
      {
        path: 'login',
        loadChildren: () =>
          import('./login/login.module').then((m) => m.LoginModule),
      },
      {
        path: 'register',
        loadChildren: () =>
          import('./register/register.module').then((m) => m.RegisterModule),
      },
    ],
  },
];

export const firebaseConfig = {
  apiKey: 'AIzaSyAg8NwlLXjVcTMW0QqEeYODtdoSckv2bYQ',
  authDomain: 'fitnessapp-a65a1.firebaseapp.com',
  projectId: 'fitnessapp-a65a1',
  storageBucket: 'fitnessapp-a65a1.appspot.com',
  messagingSenderId: '441862111873',
  appId: '1:441862111873:web:70acd7dd3732c3b4ce0380',
  measurementId: 'G-1FSQ30KPB9',
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    SharedModule.forRoot(),
  ],
})
export class AuthModule {}
