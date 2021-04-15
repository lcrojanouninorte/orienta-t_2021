import {   NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnuMujeresRoutingModule } from './onu-mujeres-routing.module';
import { OnuMujeresComponent } from './onu-mujeres.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ThemeModule } from 'app/@theme/theme.module';
import {  NbButtonModule, NbCardModule, NbCheckboxModule, NbDatepickerModule, NbIconModule, NbInputModule, NbLayoutModule, NbMenuModule, NbRadioModule, NbSpinnerModule } from '@nebular/theme';
import { Seccion1Component } from './seccion1/seccion1.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SurveyEditorComponent } from './survey-editor/survey-editor.component';
import { SurveyGatewayComponent } from './survey-gateway/survey-gateway.component';
import { GraciasComponent } from './gracias/gracias.component';
import { NbDateFnsDateModule } from '@nebular/date-fns';
import { eo } from 'date-fns/locale';


@NgModule({
  declarations: [OnuMujeresComponent, FormularioComponent, Seccion1Component, SurveyEditorComponent, SurveyGatewayComponent, GraciasComponent ],
  imports: [
    CommonModule,
    NbMenuModule,
    NbLayoutModule,
    NbCardModule,
    NbInputModule,
    NbRadioModule,
    NbCheckboxModule,
    NbDatepickerModule,
    NbIconModule,
    ThemeModule,
    NbButtonModule,
    NbDateFnsDateModule.forChild({
      format: 'dd - MM - yyyy' ,
      parseOptions: { useAdditionalWeekYearTokens: true, useAdditionalDayOfYearTokens: true },
      formatOptions: { useAdditionalWeekYearTokens: true, useAdditionalDayOfYearTokens: true },

    }),
    ReactiveFormsModule,
    NbSpinnerModule,
    OnuMujeresRoutingModule,FormsModule
  ],

})
export class OnuMujeresModule { }
