import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreasComponent } from './areas/areas.component';
import { OcupacionComponent } from './ocupacion/ocupacion.component';
import { OcupacionesComponent } from './ocupaciones/ocupaciones.component';
 import { PerfilOcupacionalComponent } from './perfil-ocupacional.component';


const routes: Routes = [
  {
    path: '',
    component: PerfilOcupacionalComponent,
    children: [
      {
        path: 'areas/:uuid',
        component: AreasComponent,
        pathMatch: 'full'
      },
      {
        path: 'ocupaciones/:pps_code/:onet_title',
        component: OcupacionesComponent,
        pathMatch: 'full'

      },
      {
        path: 'ocupacion/:title',
        component: OcupacionComponent,
        pathMatch: 'full'
      },
    ]
  },


];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfilOcupacionalRoutingModule { }
