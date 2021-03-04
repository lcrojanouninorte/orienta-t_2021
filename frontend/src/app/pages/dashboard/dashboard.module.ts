import { NgModule } from '@angular/core';
import { NbCardModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { NbSecurityModule } from '@nebular/security';

@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    NbSecurityModule,
  ],
  declarations: [
    DashboardComponent,
  ],
})
export class DashboardModule { }
