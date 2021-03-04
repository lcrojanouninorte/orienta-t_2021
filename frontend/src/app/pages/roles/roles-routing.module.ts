import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RolesComponent } from './roles.component';
import { RolesViewComponent } from './roles-view/roles-view.component';
import { RoleEditComponent } from './role-edit/role-edit.component';
import { PermissionsComponent } from './permissions/permissions.component';

const routes: Routes = [
  {
    path: '',
    component: RolesComponent,
    children: [
      {
        path: '',
        component: RolesViewComponent,
      },
      {
        path: ':id',
        component: RoleEditComponent,
      },
      {
        path: 'add',
        component: RoleEditComponent,
      },
      {
        path: 'permissions/view',
        component: PermissionsComponent,
      },

    ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablesRoutingModule { }

export const routedComponents = [
  RolesComponent,
  RolesViewComponent,
  RoleEditComponent,
  PermissionsComponent,
];
