import { NgModule } from '@angular/core';
import { NbActionsModule, NbButtonModule, NbCardModule, NbDialogModule, NbFormFieldModule, NbIconModule, NbInputModule, NbListModule, NbProgressBarModule, NbSpinnerModule, NbUserModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { NbSecurityModule } from '@nebular/security';
import { RouterModule, Routes } from '@angular/router';
import { SurveysTableComponent } from './surveys-table/surveys-table.component';
import { PopulationAddComponent } from './population-add/population-add.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PopulationViewComponent } from './population-view/population-view.component';
import { SurveyedAddComponent } from './surveyed-add/surveyed-add.component';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { PopulationsListComponent } from './populations-list/populations-list.component'
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { SharedModule } from 'app/@shared/shared.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'audience/:population_id',
    component: PopulationViewComponent,
  },
  {
    path: 'encuesta/:id',
    loadChildren: 'app/pages/onu-mujeres/onu-mujeres-routing.module#OnuMujeresRoutingModule'
  },

];
@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    NbIconModule,
    NbSecurityModule,
    NbListModule,
    NbCardModule,
    NbActionsModule,
    NbInputModule,
    NbButtonModule,
    NbSpinnerModule,
    NbDialogModule.forChild(),
    NgxDropzoneModule,
    NbProgressBarModule,
    ReactiveFormsModule,
    FormsModule,
    ClipboardModule,
    RouterModule.forChild(routes),
    SweetAlert2Module,
    NbUserModule,
    NbFormFieldModule,
    SharedModule,
    Ng2SearchPipeModule
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    DashboardComponent,
    SurveysTableComponent,
    PopulationAddComponent,
    PopulationViewComponent,
    SurveyedAddComponent,
    PopulationsListComponent,
  ],
})

export class DashboardModule { }
