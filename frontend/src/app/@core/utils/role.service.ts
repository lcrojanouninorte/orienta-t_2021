import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
 import { NbRoleProvider, NbAclService, NbAccessControl } from '@nebular/security';
import { AuthService } from '../data/remote/services/auth.service';
import { NbAuthService, NbAuthOAuth2JWTToken } from '@nebular/auth';
import { map } from 'rxjs/operators';
import { Commons } from './commons';
import { NbToastrService } from '@nebular/theme';

@Injectable(
)

export class RoleProvider extends Commons implements NbRoleProvider  {

  constructor(private _authService: AuthService,
    private _aclService: NbAclService,
    private authService: NbAuthService,
    _toastrService: NbToastrService ) {
      super(_toastrService)

  }
  // private user$:Observable<User> = this._authService.updateUser();
  // private acl$:  Observable<string[]> = of([]);
  private acl: NbAccessControl = {};

  getRole(): Observable<string> {
    return this.authService.onTokenChange()
      .pipe(
        map((token: NbAuthOAuth2JWTToken) => {
          if (token.isValid()) {
            const user =  token.getAccessTokenPayload();
            this.acl = user.acl;
            this._aclService.setAccessControl(this.acl);
            // this._authService.updateUser().subscribe();
            return user.roles;
          }
        }),
      );
  }

 /* getRole(): Observable<string[]> {
   /* v1: se busca al usuario una vez que la app inicia, esto implica que cada
   vez que se actualice la pagina se hace un llamado
    //TODO revisar por que es llamado 5 veces
      const user$ = this._authService.updateUser();
      return user$.pipe(
        take(1),
        map(user => {
          this.acl = user.acl;
          this._aclService.setAccessControl(this.acl);
          return user.roles_names;
        }),
        catchError(err => {
          console.error('Error fetching logged in user ', err);
          return EMPTY;
        }),
      );

    }*/
/*v2 solo llamar cuando hay cambio en el token. sin emargo no entra si el token ya ha sido guardado.
    getRole(): Observable<string[]> {
        this.authService.onTokenChange()
        .pipe(
          map((token: NbAuthOAuth2JWTToken ) => {
            return this.getAcl();
          }),
        );
        return this.acl$;
    }

    getAcl(): Observable<string[]>{
     return this.user$.pipe(
        map(user => {
          this.acl = user.acl;
          this._aclService.setAccessControl(this.acl);
          this.acl$ = of(user.roles_names);
          return user.roles_names;
        })
      );
     // return this.acl$;
    }*/
  }
