import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { NbAuthService, NbAuthOAuth2JWTToken } from '@nebular/auth';
import { map } from 'rxjs/operators';
import { Observable, BehaviorSubject, Subscription, forkJoin } from 'rxjs';
import { User } from '../schemas/users';
import { ApiService } from '../api.service';

@Injectable({
    providedIn: 'root',
})
export class AuthService implements OnDestroy {
    private _userDetailsData: User = null;
    private _userDetailsSource: BehaviorSubject<User> = new BehaviorSubject<User>(this._userDetailsData);
    readonly user$ = this._userDetailsSource.asObservable();

    private _tokenChangeSubscription: Subscription;
    private alive = true;
    constructor(
        private _router: Router,
        private _http: ApiService,
        private _authService: NbAuthService,
    ) {
        // listen for token change and update logged in user accordingly
        /*this._tokenChangeSubscription = this._authService.onTokenChange()
         .subscribe((token: NbAuthOAuth2JWTToken) => {
           if (token.isValid()) {
             const payload = token.getAccessTokenPayload();
            this.updateUser(payload).subscribe(
               (user: User) => {
                 this._userDetailsData = new User().deserialize(user);
                 this._userDetailsSource.next(this._userDetailsData);
               },
             );
           }
         }); */

        this._tokenChangeSubscription = this._authService.onTokenChange()
        .subscribe((token: NbAuthOAuth2JWTToken) => {
                if (token.isValid()) {
                    const payload = token.getAccessTokenPayload();
                    this._userDetailsData = new User().deserialize(payload);
                    this._userDetailsSource.next(this._userDetailsData);
                }
            },
        );
        //  this.updateUser();
    // test
    /*
        this._authService.onTokenChange()
       .pipe(
         takeWhile(_ => this.alive),
         filter((token: NbAuthOAuth2JWTToken) => token && token.isValid()),
           switchMap(res => {
             return this.updateUser(res);
           }),
       ); */
}

getCurrentUser(): Observable < User > {
    // return this.user$;
    return this._userDetailsSource.asObservable();
}
updateUser(): Observable < User > {
    return this._http.get('auth/user').pipe(
        map(userObject => {
            const user = userObject ? new User().deserialize(userObject) : null;
            // update _user behaviour subject
            this._userDetailsData = new User().deserialize(user);
            this._userDetailsSource.next(this._userDetailsData);
            // this._userDetailsSource.next(user);
            return user;
        }),
    );
}
logout() {
    this._authService.logout('NbPasswordAuthStrategy').pipe();
    
      this._userDetailsSource.next(null);
    return  this._authService.logout('NbOAuth2AuthStrategy');
}

ngOnDestroy() {
    if (this._tokenChangeSubscription) {
        this._tokenChangeSubscription.unsubscribe();
        this.alive = false;
    }
}
  }
