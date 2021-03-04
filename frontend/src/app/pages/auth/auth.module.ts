import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NbAuthModule } from '@nebular/auth';
import {
  NbAlertModule,
  NbButtonModule,
  NbCheckboxModule,
  NbInputModule,
  NbLayoutModule,
  NbLayoutColumnComponent,
  NbCardBodyComponent,
  NbCardModule,
  NbIconModule,
} from '@nebular/theme';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RequestPasswordComponent } from './request-password/request-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AuthBlockComponent } from './auth-block/auth-block.component';
import { AuthComponent } from './auth.component';
import { ThemeModule } from 'app/@theme/theme.module';
import { TermsComponent } from './terms/terms.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    RequestPasswordComponent,
    ResetPasswordComponent,
    AuthBlockComponent,
    AuthComponent,
    TermsComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    NbAuthModule,
    AuthRoutingModule,
    NbCardModule,
    NbIconModule,
    NbLayoutModule,
    ThemeModule,
    ],
})
export class AuthModule { }
