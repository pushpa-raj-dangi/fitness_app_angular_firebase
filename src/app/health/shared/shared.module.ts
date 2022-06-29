import { WorkOutsService } from './services/workouts/workouts.service';
import { RouterModule } from '@angular/router';
import { ListItemComponent } from './components/list-item/list-item.component';
import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { MealService } from './services/meals/meal.service';

@NgModule({
  imports: [
    CommonModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    RouterModule,
  ],
  declarations: [ListItemComponent],
  exports: [ListItemComponent],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: SharedModule,
      providers: [MealService, WorkOutsService],
    };
  }
}
