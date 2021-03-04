import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { NbAuthService } from '@nebular/auth';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
  export class AuthGuardService implements CanActivate  {
    constructor(
      private _router: Router,
      private _authService: NbAuthService,
      ) {}

    canActivate() {
      return this._authService.isAuthenticatedOrRefresh()
        .pipe(
          tap(authenticated => {
            if (!authenticated) {
              this._router.navigate(['auth/login']);
            }
          }),
        );
    }
  }
