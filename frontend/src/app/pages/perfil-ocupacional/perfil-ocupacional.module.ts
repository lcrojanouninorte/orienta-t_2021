import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilOcupacionalRoutingModule } from './perfil-ocupacional-routing.module';
import { PerfilOcupacionalComponent } from './perfil-ocupacional.component';
import { AreaCardComponent } from './area-card/area-card.component';
import { AreasChartComponent } from './areas-chart/areas-chart.component';
import { AreasComponent } from './areas/areas.component';

import { LottieModule } from 'ngx-lottie';
import { NbActionsModule, NbButtonModule, NbCardModule, NbIconModule, NbLayoutModule, NbListModule, NbMenuModule, NbPopoverModule, NbProgressBarModule, NbSidebarModule, NbUserModule } from '@nebular/theme';
import { ThemeModule } from 'app/@theme/theme.module';
import { playerFactory } from 'app/app.module';
import { SwiperModule } from "swiper/angular";
import { ChartModule } from 'angular2-chartjs';
import { OcupacionesComponent } from './ocupaciones/ocupaciones.component';
import { OcupacionComponent } from './ocupacion/ocupacion.component';
import { LevelListingComponent } from './level-listing/level-listing.component';
import { OcupationInfoCardComponent } from './ocupation-info-card/ocupation-info-card.component';
import { MercadoLaboralComponent } from './mercado-laboral/mercado-laboral.component';
import { HighChartComponent } from './high-chart/high-chart.component';

@NgModule({
  declarations: [
    PerfilOcupacionalComponent,
    AreaCardComponent,
    AreasChartComponent,
    AreasComponent,
     OcupacionesComponent,
    OcupacionComponent,
    LevelListingComponent,
    OcupationInfoCardComponent,
    MercadoLaboralComponent,
    HighChartComponent
  ],
  imports: [
    CommonModule,
    PerfilOcupacionalRoutingModule,
    NbMenuModule,
    NbLayoutModule,
    ThemeModule,
    NbCardModule,
    NbSidebarModule,
    NbButtonModule,
    NbIconModule,
    NbActionsModule,
    ChartModule,
    SwiperModule,
    NbUserModule,
    NbPopoverModule,NbListModule,
    LottieModule.forRoot({ player: playerFactory }),
    NbProgressBarModule
  ]
})
export class PerfilOcupacionalModule { }
