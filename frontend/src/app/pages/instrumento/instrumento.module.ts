import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstrumentoRoutingModule } from './instrumento-routing.module';
import { InstructivoComponent } from './instructivo/instructivo.component';
import { InstrumentoComponent } from './instrumento.component';
import { LottieModule } from 'ngx-lottie';
import { NbActionsModule, NbBadgeModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbDatepickerModule, NbIconModule, NbInputModule, NbLayoutModule, NbMenuModule, NbProgressBarModule, NbRadioModule, NbSidebarModule, NbSpinnerModule, NbTooltipModule } from '@nebular/theme';
import { playerFactory } from 'app/app.module';
import { ThemeModule } from 'app/@theme/theme.module';
import { HowToComponent } from './how-to/how-to.component';
import { ScaleCardComponent } from './scale-card/scale-card.component';
import { ScaleComponent } from './scale/scale.component';
import { TestComponent } from './test/test.component';
import { NbDateFnsDateModule } from '@nebular/date-fns';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [InstructivoComponent, InstrumentoComponent, HowToComponent, ScaleCardComponent, ScaleComponent, TestComponent],
  imports: [
    CommonModule,
    InstrumentoRoutingModule,
    NbMenuModule,
    NbLayoutModule,
    ThemeModule,
    NbCardModule,
    NbSidebarModule,
    NbButtonModule,
    NbIconModule,
    NbActionsModule,
    LottieModule.forRoot({ player: playerFactory }),
    NbInputModule,
    NbRadioModule,
    NbCheckboxModule,
    NbDatepickerModule,
    NbIconModule,
    ThemeModule,
    NbButtonModule,
    NbTooltipModule,
    NbBadgeModule,
    NbProgressBarModule,
    NbDateFnsDateModule.forChild({
      format: 'dd - MM - yyyy' ,
      parseOptions: { useAdditionalWeekYearTokens: true, useAdditionalDayOfYearTokens: true },
      formatOptions: { useAdditionalWeekYearTokens: true, useAdditionalDayOfYearTokens: true },

    }),
    ReactiveFormsModule,
    NbSpinnerModule,
   ]
})
export class InstrumentoModule {


}
