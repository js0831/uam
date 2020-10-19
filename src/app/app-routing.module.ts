import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProvisioningComponent } from './provisioning/provisioning.component';

const routes: Routes = [
  {
    path: 'application',
    loadChildren: () => import('./modules/application/application.module').then(m => m.ApplicationModule)
  },
  {
    path: '',
    component: ProvisioningComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
