
import { NgModule } from '@angular/core';
import { NbButtonModule, NbCardModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';

import { NotFoundComponent } from './not-found/not-found.component';
import { MiscRoutingModule } from './misc-routing.module';
import { MiscComponent } from './misc.component';

@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbButtonModule,
    MiscRoutingModule,
  ],
  declarations: [
    MiscComponent,
    NotFoundComponent,
  ],
})
export class MiscModule { }
