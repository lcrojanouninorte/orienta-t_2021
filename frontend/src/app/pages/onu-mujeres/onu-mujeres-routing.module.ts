import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { GraciasComponent } from './gracias/gracias.component';
import { OnuMujeresComponent } from './onu-mujeres.component';
import { SurveyEditorComponent } from './survey-editor/survey-editor.component';
import { SurveyGatewayComponent } from './survey-gateway/survey-gateway.component';
const routes: Routes = [
  {
    path: '',
    component: OnuMujeresComponent,
    children: [
      {
        path: 'edit',
        component: SurveyEditorComponent,
        pathMatch: 'full'
      },
      {
        path: 'gracias',
        component: GraciasComponent,
        pathMatch: 'full'
      },
      {
        path: ':section_id/:pollster_id/:uuid',
        component: FormularioComponent,
      },
      {
        path: ':section_id/:population_id/:pollster_id/:uuid',
        component: FormularioComponent,
      },
      {
        path: ':population_id/:pollster_id',
        component: SurveyGatewayComponent,
      },
    ]
  },

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnuMujeresRoutingModule { }
