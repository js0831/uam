import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralRolesComponent } from './general-roles/general-roles.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: GeneralRolesComponent
  }
];

@NgModule({
  declarations: [GeneralRolesComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class GeneralRolesModule { }
