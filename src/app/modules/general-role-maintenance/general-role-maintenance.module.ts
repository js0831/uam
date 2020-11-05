import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralRoleMaintenanceComponent } from './pages/general-role-maintenance/general-role-maintenance.component';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from './../../shared/shared.module';
import { ApplicationAssignmentComponent } from './components/application-assignment/application-assignment.component';
import { GeneralRoleListComponent } from './pages/general-role-list/general-role-list.component';
import { DummyDataComponent } from './pages/dummy-data/dummy-data.component';
import { AssignedApplicationsAttributesComponent } from './components/assigned-applications-attributes/assigned-applications-attributes.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: GeneralRoleListComponent
  },
  {
    path: 'form',
    component: GeneralRoleMaintenanceComponent
  },
  {
    path: 'dummy-data',
    component: DummyDataComponent
  },
];

@NgModule({
  declarations: [
    GeneralRoleMaintenanceComponent,
    ApplicationAssignmentComponent,
    GeneralRoleListComponent,
    DummyDataComponent,
    AssignedApplicationsAttributesComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class GeneralRoleMaintenanceModule { }
