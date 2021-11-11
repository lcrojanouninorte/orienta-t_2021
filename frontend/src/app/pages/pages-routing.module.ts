import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { AuthGuardService } from '@core/guard/auth-guard.service';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [

    {
      path: 'roles',
      loadChildren: () => import('./roles/roles.module')
        .then(m => m.RolesModule),data: { preload: false, delay: 16000 },
        canActivate: [AuthGuardService]
    },
    {
      path: 'users',
      loadChildren: () => import('./users/users.module')
        .then(m => m.UsersModule), data: { preload: false, delay: 16000 },
        canActivate: [AuthGuardService]
    },
    {
      path: 'not-found',
      loadChildren: () => import('./misc/not-found/not-found.component')

    },
    {
      path: '',
      redirectTo: 'not-found',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
