/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LOCALE_ID, NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
registerLocaleData(es);
import { eo } from 'date-fns/locale';
import { NbDateFnsDateModule } from "@nebular/date-fns"


import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {
  /*NbChatModule,*/
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,
  NbThemeModule,
} from '@nebular/theme';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ThemeModule.forRoot(),
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDateFnsDateModule.forRoot({
      parseOptions: { locale: eo },
      formatOptions: { locale: eo },
    }),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    SweetAlert2Module.forRoot(),
    NbDatepickerModule.forRoot(),

     /*NbChatModule.forRoot({
      messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
    }),*/
    NbThemeModule.forRoot({ name: 'obsrio' }),

    CoreModule.forRoot(),
    LottieModule.forRoot({ player: playerFactory }),

  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-CO' },
    {
      provide: 'origin',
      useValue: window.location.origin
      }
  ],
  bootstrap: [AppComponent],

})
export class AppModule {
}
