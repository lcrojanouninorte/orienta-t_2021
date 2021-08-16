import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing.component';
import { NbButton, NbButtonModule, NbCardModule, NbLayoutModule, NbMenuModule, NbSidebarModule } from '@nebular/theme';
import { ThemeModule } from 'app/@theme/theme.module';
import { LottieModule } from 'ngx-lottie';
import { playerFactory } from 'app/app.module';


const routes: Routes = [
  {
    path: '',
    component: LandingComponent,

  }

];
@NgModule({
  declarations: [
    LandingComponent
  ],
  imports: [
    CommonModule,
    NbMenuModule,
    NbLayoutModule,
    ThemeModule,
    NbCardModule,
    NbSidebarModule,
    NbButtonModule,
    LottieModule.forRoot({ player: playerFactory }),

    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class LandingModule { }
