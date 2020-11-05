import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttributeMaintenanceListComponent } from './pages/attribute-maintenance-list/attribute-maintenance-list.component';
import { RouterModule, Routes } from '@angular/router';
import { AttributeFormComponent } from './components/attribute-form/attribute-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AttributeOptionsComponent } from './components/attribute-options/attribute-options.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: AttributeMaintenanceListComponent
  }
];

@NgModule({
  declarations: [
    AttributeMaintenanceListComponent,
    AttributeFormComponent,
    AttributeOptionsComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class AttributeMaintenanceModule { }
