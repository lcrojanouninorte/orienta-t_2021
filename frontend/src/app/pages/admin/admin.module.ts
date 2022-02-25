import { AdminRoutingModule } from './admin-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { SurveyedsTableComponent } from './surveyeds-table/surveyeds-table.component';
import { NbMenuModule, NbLayoutModule, NbCardModule, NbSidebarModule, NbButtonModule, NbTabsetModule, NbActionsModule, NbIconModule, NbDialogModule, NbCheckboxModule, NbSpinnerModule, NbListModule, NbUserModule, NbTagModule, NbDatepickerModule } from '@nebular/theme';
import { ThemeModule } from 'app/@theme/theme.module';
import { WebdatarocksPivotModule } from 'ng-webdatarocks';
import { CnoClassificationLevelComponent } from './cno-classification-level/cno-classification-level.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CnoOccupationsTableComponent } from './cno-occupations-table/cno-occupations-table.component';
import { CnoKnowledgeOccupationTableComponent } from './cno-knowledge-occupation-table/cno-knowledge-occupation-table.component';
import { CnoSkillsOccupationTableComponent } from './cno-skills-occupation-table/cno-skills-occupation-table.component';
import { CnoSurveyedsRankingsTableComponent } from './cno-surveyeds-rankings-table/cno-surveyeds-rankings-table.component';
import { CnoOnetsOutputsTableComponent } from './cno-onets-outputs-table/cno-onets-outputs-table.component';
import { CnoOnetsTableComponent } from './cno-onets-table/cno-onets-table.component';
import { ChartPivotTableComponent } from './chart-pivot-table/chart-pivot-table.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { PanelSummaryComponent } from './panel-summary/panel-summary.component';
import { FlatPivotTableComponent } from './flat-pivot-table/flat-pivot-table.component';
import { LandingComponent } from './landing/landing.component';
import { ChartModule } from 'angular2-chartjs';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { TutorialsComponent } from './tutorials/tutorials.component';


@NgModule({
  declarations: [
    AdminComponent,
    SurveyedsTableComponent,
    CnoClassificationLevelComponent,
    AdminDashboardComponent,
    CnoOccupationsTableComponent,
    CnoKnowledgeOccupationTableComponent,
    CnoSkillsOccupationTableComponent,
    CnoSurveyedsRankingsTableComponent,
    CnoOnetsOutputsTableComponent,
    CnoOnetsTableComponent,
    ChartPivotTableComponent,
    PanelSummaryComponent,
    FlatPivotTableComponent,
    LandingComponent,
    TutorialsComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NbMenuModule,
    NbLayoutModule,
    ThemeModule,
    NbCardModule,
    NbSidebarModule,
    NbButtonModule,
    WebdatarocksPivotModule,
    NbTabsetModule,
    NbActionsModule,
    NgxDropzoneModule,
    NbIconModule,
    NbDialogModule.forChild(),
    NbCheckboxModule,
    NbSpinnerModule,
    NbListModule,
    ChartModule,
    NgxChartsModule, NbUserModule, NbDatepickerModule.forRoot(),NbTagModule
   ]
})
export class AdminModule { }
