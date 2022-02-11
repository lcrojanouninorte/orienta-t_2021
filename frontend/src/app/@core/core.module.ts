import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NbAuthModule,
  NbPasswordAuthStrategy,
  NbOAuth2AuthStrategy,
  NbOAuth2ClientAuthMethod,
  NbOAuth2ResponseType,
  NbOAuth2GrantType,
  NbAuthOAuth2JWTToken,
  NbAuthJWTInterceptor,
  NB_AUTH_TOKEN_INTERCEPTOR_FILTER,
} from '@nebular/auth';
import { NbSecurityModule, NbRoleProvider } from '@nebular/security';
import { throwIfAlreadyLoaded } from './module-import-guard';
import {
  AnalyticsService,
  LayoutService,
} from './utils';
// Data
 import { RoleProvider } from './utils/role.service';

// Services
import { MockDataModule } from './mock/mock-data.module';

import { DataModule } from './data/data.module';
import { HTTP_INTERCEPTORS, HttpRequest } from '@angular/common/http';
import { environment } from 'environments/environment';
import { CustomPreloadingStrategy } from './configs/custom-preloading-strategy.service';

const socialLinks = [
  {
    url: 'https://github.com/akveo/nebular',
    target: '_blank',
    icon: 'github',
  },
  {
    url: 'https://www.facebook.com/akveo/',
    target: '_blank',
    icon: 'facebook',
  },
  {
    url: 'https://twitter.com/akveo_inc',
    target: '_blank',
    icon: 'twitter',
  },
];

export const oauthUrl = environment.oauth2.token;
export const oauthBaseUrl =  environment.oauth2.base;
export const apiUrl = environment.baseUrl.api;
export const NB_CORE_PROVIDERS = [
  ...MockDataModule.forRoot().providers,
  ...NbAuthModule.forRoot({
    strategies: [
      NbPasswordAuthStrategy.setup({
        name: 'NbPasswordAuthStrategy',
        baseEndpoint: apiUrl,
        register: {
          method: 'post',
          endpoint: 'register',
          requireValidToken: false,
          redirect: {
            success: '/auth/login',
            failure: null,
          },
          defaultErrors: ['Es posible que el usuario ya se encuentre registrado ó la contraseña no es valida. Si el usuario existe, puede intentar recuperar contraseña'],
          defaultMessages: ['Se ha Registrado Exitosamente, por favor revise su correo para activar su cuenta, recuerde revisar spam.'],
        },
        logout: {
          endpoint: 'token/revoke',
          method: 'post',
        },

      }),
      NbOAuth2AuthStrategy.setup({
        name: 'NbOAuth2AuthStrategy',
        clientId: '9',
        clientSecret: 'jq1aa3Qyg05qMQwty0Z1REvETptfxGrwn4nPkyZx',
        clientAuthMethod: NbOAuth2ClientAuthMethod.REQUEST_BODY,
        baseEndpoint: oauthBaseUrl,
        redirect: {
          success: '/',
          failure: null,
        },
        defaultErrors: ['Usuario o contraseña no es valido, o su cuenta aún no se encuentra activa'],
        defaultMessages: ['Ingresando...'],
        authorize: {
          endpoint: 'authorize',
          redirectUri: 'encuesta/instrucciones',
          responseType: NbOAuth2ResponseType.CODE,
          scope: '*',
          params: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        },
        token: {
          endpoint: 'token',
          grantType: NbOAuth2GrantType.PASSWORD,
          class: NbAuthOAuth2JWTToken,
          scope: '*',
          redirectUri: environment.baseUrl.frontend + '/#/',
        },
        refresh: {
          endpoint: 'token/refresh',
          grantType: NbOAuth2GrantType.REFRESH_TOKEN,
          scope: '',
          requireValidToken: true,
        },
      }),
    ],
    forms: {
      login: {
        socialLinks: socialLinks,
        strategy: 'NbOAuth2AuthStrategy',
      },
      register: {
        redirectDelay: 4000,
        socialLinks: socialLinks,
        strategy: 'NbPasswordAuthStrategy',
      },
      resetPassword: {
        redirectDelay: 0,
        showMessages: {
          success: true,
          error: true,
        },
        requireValidToken: false,
        resetPasswordTokenKey: 'reset_password_token' ,
        strategy: 'NbPasswordAuthStrategy',
      },
      requestPassword: {
        redirectDelay: 500,
        showMessages: {
          success: true,
          error: true,
        },
        requireValidToken: false,
        strategy: 'NbPasswordAuthStrategy',
      },
      validation: {
        password: {
          required: true,
          minLength: 6,
          maxLength: 50,

        }
      },
    },
  }).providers,

  NbSecurityModule.forRoot({
    accessControl: {},
  }).providers,
  {
    provide: NbRoleProvider, useClass: RoleProvider,
  },
  AnalyticsService,
  LayoutService,
];

@NgModule({
  imports: [
    CommonModule,
    DataModule,
  ],
  exports: [
    NbAuthModule,
  ],
  declarations: [],
})
export class CoreModule {
  // Variables

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');

  }

  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        ...NB_CORE_PROVIDERS,
        // { provide: HTTP_INTERCEPTORS, useClass: HttpClientInterception, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: NbAuthJWTInterceptor, multi: true},
        { provide: NB_AUTH_TOKEN_INTERCEPTOR_FILTER,
          useValue: function (req: HttpRequest<any>) {

            const whiteList = req.url.includes('token/refresh');
            const a = 0;
            return whiteList;

          },
      },
      CustomPreloadingStrategy
      ],
    };
  }
}
