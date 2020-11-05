import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then( m => m.LoginModule)
  },
  {
    path: 'general-role-maintenance',
    loadChildren: () => import('./modules/general-role-maintenance/general-role-maintenance.module').then(
      m => m.GeneralRoleMaintenanceModule
    )
  },
  {
    path: 'staff-provisioning',
    loadChildren: () => import('./modules/staff-provisioning/staff-provisioning.module').then(
      m => m.StaffProvisioningModule
    )
  },
  {
    path: 'attribute-maintenance',
    loadChildren: () => import('./modules/attribute-maintenance/attribute-maintenance.module').then(
      m => m.AttributeMaintenanceModule
    )
  },
  {
    path: 'application-maintenance',
    loadChildren: () => import('./modules/application-maintenance/application-maintenance.module').then(
      m => m.ApplicationMaintenanceModule
    )
  },
  {
    path: '404',
    loadChildren: () => import('./modules/page-not-found/page-not-found.module').then( m => m.PageNotFoundModule)
  },
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
