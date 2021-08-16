import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstrumentoRoutingModule } from './instrumento-routing.module';
import { InstructivoComponent } from './instructivo/instructivo.component';
import { InstrumentoComponent } from './instrumento.component';
import { LottieModule } from 'ngx-lottie';
import { NbActionsModule, NbButtonModule, NbCardModule, NbIconModule, NbLayoutModule, NbMenuModule, NbSidebarModule } from '@nebular/theme';
import { playerFactory } from 'app/app.module';
import { ThemeModule } from 'app/@theme/theme.module';
import { HowToComponent } from './how-to/how-to.component';
import { ScaleCardComponent } from './scale-card/scale-card.component';
import { ScaleComponent } from './scale/scale.component';


@NgModule({
  declarations: [InstructivoComponent, InstrumentoComponent, HowToComponent, ScaleCardComponent, ScaleComponent],
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

   ]
})
export class InstrumentoModule {


}
