import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilOcupacionalRoutingModule } from './perfil-ocupacional-routing.module';
import { PerfilOcupacionalComponent } from './perfil-ocupacional.component';
import { AreaCardComponent } from './area-card/area-card.component';
import { AreasChartComponent } from './areas-chart/areas-chart.component';
import { AreasComponent } from './areas/areas.component';
import { CarrerasComponent } from './carreras/carreras.component';
import { ProfesionComponent } from './profesion/profesion.component';
import { LottieModule } from 'ngx-lottie';
import { NbActionsModule, NbButtonModule, NbCardModule, NbIconModule, NbLayoutModule, NbMenuModule, NbSidebarModule } from '@nebular/theme';
import { ThemeModule } from 'app/@theme/theme.module';
import { playerFactory } from 'app/app.module';

import { SwiperModule } from "swiper/angular";

@NgModule({
  declarations: [
    PerfilOcupacionalComponent,
    AreaCardComponent,
    AreasChartComponent,
    AreasComponent,
    CarrerasComponent,
    ProfesionComponent
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
    SwiperModule,
    LottieModule.forRoot({ player: playerFactory }),
  ]
})
export class PerfilOcupacionalModule { }
