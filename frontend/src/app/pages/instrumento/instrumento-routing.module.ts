import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HowToComponent } from './how-to/how-to.component';
import { InstructivoComponent } from './instructivo/instructivo.component';
import { InstrumentoComponent } from './instrumento.component';

const routes: Routes = [
  {
    path: '',
    component: InstrumentoComponent,
    children: [
      {
        path: 'instrucciones',
        component: InstructivoComponent,
        pathMatch: 'full'
      },
      {
        path: 'ejemplo',
        component: HowToComponent,
        pathMatch: 'full'
      }
    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstrumentoRoutingModule { }
