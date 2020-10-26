import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralRolesComponent } from './general-roles/general-roles.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { GeneralRoleListComponent } from './general-role-list/general-role-list.component';

const routes: Routes = [
  {
    path: '',
    component: GeneralRolesComponent
  },
  {
    path: 'list',
    component: GeneralRoleListComponent
  }
];

@NgModule({
  declarations: [GeneralRolesComponent, GeneralRoleListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class GeneralRolesModule { }
