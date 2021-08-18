import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreasComponent } from './areas/areas.component';
import { CarrerasComponent } from './carreras/carreras.component';
import { PerfilOcupacionalComponent } from './perfil-ocupacional.component';
import { ProfesionComponent } from './profesion/profesion.component';


const routes: Routes = [
  {
    path: '',
    component: PerfilOcupacionalComponent,
    children: [
      {
        path: 'areas',
        component: AreasComponent,
        pathMatch: 'full'
      },
      {
        path: 'carreras',
        component: CarrerasComponent,
        pathMatch: 'full'
      },
      {
        path: 'profesion/:cod/:area',
        component: ProfesionComponent,
      },
    ]
  },


];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfilOcupacionalRoutingModule { }
