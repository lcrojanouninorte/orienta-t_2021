import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { NotFoundComponent } from './misc/not-found/not-found.component';
import { LightboxModule } from 'ngx-lightbox';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    LightboxModule,
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
