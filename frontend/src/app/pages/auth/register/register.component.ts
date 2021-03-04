import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import { NbRegisterComponent } from '@nebular/auth';
import { NbAuthService } from '@nebular/auth';
import { NB_AUTH_OPTIONS } from '@nebular/auth';
import { AuthService } from 'app/@core/data/remote/services/auth.service';
import { Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'ngx-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent extends NbRegisterComponent {

  constructor( service: NbAuthService,
    @Inject(NB_AUTH_OPTIONS) protected options,
    private _authService: AuthService,
    cd: ChangeDetectorRef,
    public  router: Router, private _guestGuard: NbAuthService,private location: Location) {
    super(service, options, cd, router)
    this._guestGuard.isAuthenticated()
    .subscribe(authenticated => {
      if (authenticated) {
        this.location.back();
        
        return false;
      } else {
        return true;
      }
    }
       
    );
}
}

