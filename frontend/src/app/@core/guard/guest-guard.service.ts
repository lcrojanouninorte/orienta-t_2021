import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { NbAuthService } from '@nebular/auth';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GuestGuardService implements CanActivate {

  constructor(private authService: NbAuthService, private router: Router)  {
  }

  canActivate():  Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isAuthenticated()
      .pipe(
        tap(authenticated => {
          if (authenticated) {
            this.router.navigate(['']);
            return false;
          } else {
            return true;
          }
        }),
      );
  }
}
