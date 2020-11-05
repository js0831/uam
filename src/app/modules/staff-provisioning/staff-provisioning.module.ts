import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffProvisioningListComponent } from './pages/staff-provisioning-list/staff-provisioning-list.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { StaffProvisioningFormComponent } from './pages/staff-provisioning-form/staff-provisioning-form.component';
import { StaffInformationFormComponent } from './components/staff-information-form/staff-information-form.component';
import { StaffGeneralRoleComponent } from './components/staff-general-role/staff-general-role.component';
import { AssignedGeneralRoleAttributesComponent } from './components/assigned-general-role-attributes/assigned-general-role-attributes.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: StaffProvisioningListComponent
  },
  {
    path: 'form',
    component: StaffProvisioningFormComponent
  },

];

@NgModule({
  declarations: [
    StaffProvisioningListComponent,
    StaffProvisioningFormComponent,
    StaffInformationFormComponent,
    StaffGeneralRoleComponent,
    AssignedGeneralRoleAttributesComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class StaffProvisioningModule { }
