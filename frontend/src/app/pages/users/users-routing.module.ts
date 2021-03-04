import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersViewComponent } from './users-view/users-view.component';
import { UsersComponent } from './users.component';
import { UsersEditComponent } from './users-edit/users-edit.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      {
        path: '',
        component: UsersViewComponent,
      },
      {
        path: ':id',
        component: UsersEditComponent,
      },
      {
        path: 'add',
        component: UsersEditComponent,
      },
    ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule { }
