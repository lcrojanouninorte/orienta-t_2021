import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRippleModule } from '@angular/material/core';
import {
  NbActionsModule,
  NbLayoutModule,
  NbMenuModule,
  NbSearchModule,
  NbSidebarModule,
  NbUserModule,
  NbContextMenuModule,
  NbButtonModule,
  NbSelectModule,
  NbIconModule,
  NbThemeModule,
  NbToggleModule,

  NbTooltipModule,
  NbIconLibraries,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbSecurityModule } from '@nebular/security';

import {
  FooterComponent,
  HeaderComponent,
  LayoutDirectionSwitcherComponent,
  SearchInputComponent,
  SwitcherComponent,
} from './components';
import {
  CapitalizePipe,
  PluralPipe,
  RoundPipe,
  TimingPipe,
  NumberWithCommasPipe,
} from './pipes';
import {
  OneColumnLayoutComponent,
  OneColumnNoHeaderLayoutComponent,
  ThreeColumnsLayoutComponent,
  TwoColumnsLayoutComponent,
} from './layouts';
import { DEFAULT_THEME } from './styles/theme.default';

import { MATERIAL_LIGHT_THEME } from './styles/material/theme.material-light';

import { OBSRIO_THEME } from './styles/theme.obsrio';

const NB_MODULES = [
  NbLayoutModule,
  NbMenuModule,
  NbUserModule,
  NbActionsModule,
  NbSearchModule,
  NbSidebarModule,
  NbContextMenuModule,
  NbSecurityModule,
  NbButtonModule,
  NbSelectModule,
  NbIconModule,
  NbEvaIconsModule,
  NbToggleModule,
  NbTooltipModule,
];
const COMPONENTS = [
  SwitcherComponent,
  LayoutDirectionSwitcherComponent,
  HeaderComponent,
  FooterComponent,
  SearchInputComponent,
  OneColumnLayoutComponent,
  OneColumnNoHeaderLayoutComponent,
  ThreeColumnsLayoutComponent,
  TwoColumnsLayoutComponent,

];
const PIPES = [
  CapitalizePipe,
  PluralPipe,
  RoundPipe,
  TimingPipe,
  NumberWithCommasPipe,
];

@NgModule({
  imports: [CommonModule, MatRippleModule, ...NB_MODULES],
  exports: [CommonModule, MatRippleModule, ...PIPES, ...COMPONENTS],
  declarations: [...COMPONENTS, ...PIPES],
})
export class ThemeModule {
  constructor(private iconLibraries: NbIconLibraries){
    this.iconLibraries.registerSvgPack('orienta-t-icons', {
      'love-ol':'<img src="assets/Orienta-t/Escala de respuesta/SVG/Assets Oriéntate_ Me encanta activo.svg"">',
      'like-ol': '<img src="assets/Orienta-t/Escala de respuesta/SVG/Assets Oriéntate_Me gusta activo.svg"">',
      'not-sure-ol': '<img src="assets/Orienta-t/Escala de respuesta/SVG/Assets Oriéntate_No estoy seguro activo.svg"">',
      'not-like-ol': '<img src="assets/Orienta-t/Escala de respuesta/SVG/Assets Oriéntate_No me gusta activo.svg"">',

      'love': '<img src="assets/Orienta-t/Escala de respuesta/SVG/Assets Oriéntate_Me encanta.svg"">',
      'like': '<img src="assets/Orienta-t/Escala de respuesta/SVG/Assets Oriéntate_Me gusta.svg"">',
      'not-sure': '<img src="assets/Orienta-t/Escala de respuesta/SVG/Assets Oriéntate_No estoy seguro.svg"">',
      'not-like': '<img src="assets/Orienta-t/Escala de respuesta/SVG/Assets Oriéntate_No me gusta.svg"">',

      // ...
});
  }
  static forRoot(): ModuleWithProviders<ThemeModule> {
    return {
      ngModule: ThemeModule,
      providers: [
        ...NbThemeModule.forRoot(
          {
            name: 'obsrio',
          },
          [DEFAULT_THEME,   OBSRIO_THEME ],
        ).providers,
      ],
    };
  }
}
