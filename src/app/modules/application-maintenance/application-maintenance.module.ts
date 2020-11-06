import { NgModule } from '@angular/core';
import { ApplicationListComponent } from './pages/application-list/application-list.component';
import { ApplicationFormComponent } from './pages/application-form/application-form.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { ApplicationAddComponent } from './components/application-add/application-add.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: ApplicationListComponent
  },
  {
    path: 'form',
    component: ApplicationFormComponent
  }
];

@NgModule({
  declarations: [
    ApplicationListComponent,
    ApplicationFormComponent,
    ApplicationAddComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class ApplicationMaintenanceModule { }
