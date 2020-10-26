import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/provisioning/provisioning.module').then(m => m.ProvisioningModule)
  },
  {
    path: 'application',
    loadChildren: () => import('./modules/application/application.module').then(m => m.ApplicationModule)
  },
  {
    path: 'general-roles',
    loadChildren: () => import('./modules/general-roles/general-roles.module').then(m => m.GeneralRolesModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
