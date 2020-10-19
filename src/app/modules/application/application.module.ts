import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationComponent } from './application/application.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { ApplicationViewComponent } from './application-view/application-view.component';

const routes: Routes = [
  {
    path: '',
    component: ApplicationComponent
  },
  {
    path: ':id',
    component: ApplicationViewComponent
  }
];

@NgModule({
  declarations: [
    ApplicationComponent,
    ApplicationViewComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class ApplicationModule { }
