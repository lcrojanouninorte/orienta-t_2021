import { Component, OnInit, ChangeDetectorRef, Inject } from '@angular/core';
import { NbLoginComponent, NbAuthService, NB_AUTH_OPTIONS } from '@nebular/auth';
import { Router } from '@angular/router';
import { AuthService } from 'app/@core/data/remote/services/auth.service';

import {Location} from '@angular/common';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent extends NbLoginComponent {

constructor( service: NbAuthService,
  @Inject(NB_AUTH_OPTIONS) protected options,
  private _authService: AuthService,
  cd: ChangeDetectorRef,
  public  router: Router, private _guestGuard: NbAuthService,private location: Location) {
  super(service, options, cd, router);

  if (this.router.isActive('/auth/userverification/success', true)) {
    this.showMessages.success = true;
    this.messages = ['Se ha verificado su e-mail!, ya puede ingrese con su e-mail y contraseña.'];
  }
  if (this.router.isActive('/auth/userverification/failed', true)) {
    this.showMessages.error = true;
    this.errors = ['No ha sido posible verificar su e-mail. Por favor intente nuevamente, o envienos un correo a obsriomagdalena@uninorte.edu.co en caso de que el problema persista.'];
  }
  this._guestGuard.isAuthenticated()
      .subscribe(authenticated => {
        if (authenticated) {
          if(this.router.url !== 'encuesta/instrucciones' ){
            this.router.navigate(['encuesta/instrucciones']);
            //Todo redirect by role

          }

          return false;
        } else {
          return true;
        }
      }

      );
  }

}
