import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MiscComponent } from './misc.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: MiscComponent,
    children: [
      {
        path: '404',
        component: NotFoundComponent,
      },
      {
        path: '',
        redirectTo: '404',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiscRoutingModule {
}