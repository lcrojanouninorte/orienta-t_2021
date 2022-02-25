import { TutorialsComponent } from './tutorials/tutorials.component';
import { CnoKnowledgeOccupationTableComponent } from './cno-knowledge-occupation-table/cno-knowledge-occupation-table.component';
import { CnoClassificationLevelComponent } from './cno-classification-level/cno-classification-level.component';
import { CnoOccupationsTableComponent } from './cno-occupations-table/cno-occupations-table.component';
import { SurveyedsTableComponent } from './surveyeds-table/surveyeds-table.component';
import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { RouterModule, Routes } from '@angular/router';
import { CnoSkillsOccupationTableComponent } from './cno-skills-occupation-table/cno-skills-occupation-table.component';
import { CnoOnetsOutputsTableComponent } from './cno-onets-outputs-table/cno-onets-outputs-table.component';
import { CnoOnetsTableComponent } from './cno-onets-table/cno-onets-table.component';
import { LandingComponent } from './landing/landing.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';


const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'opciones',
        component: LandingComponent,
      },
      {
        path: 'dashboard',
        component: AdminDashboardComponent,
      },

      {
        path: 'tutorial',
        component:   TutorialsComponent,
      },
      {
        path: 'encuestados',
        component: SurveyedsTableComponent,
      },
      {
        path: 'ocupaciones',
        component: CnoOccupationsTableComponent,
      }
      ,
      {
        path: 'niveles',
        component: CnoClassificationLevelComponent,
      },
      {
        path: 'basedatos',
        component:CnoKnowledgeOccupationTableComponent,
      },
      {
        path: 'habilidades',
        component:CnoSkillsOccupationTableComponent,
      },

      {
        path: 'onets',
        component:   CnoOnetsTableComponent,
      },

      {
        path: 'salidas',
        component:   CnoOnetsOutputsTableComponent,
      },


    ]
  },]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
