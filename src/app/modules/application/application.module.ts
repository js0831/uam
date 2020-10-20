import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationComponent } from './application/application.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { ApplicationViewComponent } from './application-view/application-view.component';
import { TestComponent } from './test/test.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApplicationAttributeOptionsComponent } from './application-attribute-options/application-attribute-options.component';

const routes: Routes = [
  {
    path: '',
    component: ApplicationComponent
    // component: TestComponent
  },
  {
    path: ':id',
    component: ApplicationViewComponent
  }
];

@NgModule({
  declarations: [
    ApplicationComponent,
    ApplicationViewComponent,
    TestComponent,
    ApplicationAttributeOptionsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class ApplicationModule { }
