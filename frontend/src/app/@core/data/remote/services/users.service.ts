import { of as observableOf,  Observable, of, throwError } from 'rxjs';
import { Injectable, OnDestroy } from '@angular/core';
import { Contacts, RecentUsers, User } from '../schemas/users';
import { ApiService } from '../api.service';
import { HttpHeaders } from '@angular/common/http';
import { NbAuthService } from '@nebular/auth';
import { tap, catchError, map } from 'rxjs/operators';
import { Role } from '../schemas/role.model';
import { Commons } from '../../../utils/commons';
import { NbToastrService } from '@nebular/theme';

const routes = {
  users: 'users',
  users_role: (rol: string, nextPage: number, pageSize: number) => `users/${rol}/${nextPage}/${pageSize}`,
  usersByRole: 'users/byrole',
  user: (id: number) => `users/${id}`,
};

@Injectable()
export class UserService extends  Commons {


  private time: Date = new Date;

  /** POST: add a new user to the server */
  /*public addUser(user: User): Observable<User> {
    return this._http.post<User>(routes.users, user, httpOptions);
  }*/
  /** POST: add a new category to the server */
  public addUser(user: FormData | User): Observable<any> {
    return this._http.postFormData<User>(routes.users, user, {
      reportProgress: true,
      observe: 'events',
    }).pipe(
      tap(_ => this.log(`create User `)),
  //    catchError(this.handleError<User>('addUser')),
    );
  }

  getUsersByRole(): Observable<Role[]> {
    return  this._http.get<Role[]>(routes.usersByRole).pipe(
      tap(_ => this.log(`Fetched`)),
      catchError(this.handleError<Role[]>('getUsersByRole', [])),
     // map(roles => roles.map(role => new Role().deserialize(role))),
    );
  }
  getSingle(id: number): Observable<User> {
    return this._http.get<User>(routes.user(id)).pipe(
      catchError(this.handleError<User[]>('getSingle', [])),
      map(user => new User().deserialize(user)),
      );
    }

  deleteUser(user_id: number): Observable<User> {
    const url = routes.user(user_id);

    return this._http.delete<User>(url).pipe(
      tap(_ => this.log(`deleted User id=${user_id}`)),
      catchError(this.handleError<User>('deleteUser')),
      map(user => new User().deserialize(user)),
    );
  }


  load(pageToLoadNext: number, pageSize: number, rol: string): Observable<User[]> {
    return  this._http.get<User[]>(routes.users_role(rol,pageSize,pageToLoadNext)).pipe(
      tap(_ => this.log(`Fetched`)),
      catchError(this.handleError<User[]>('getUsers', [])),
     // map(roles => roles.map(role => new Role().deserialize(role))),
    );  }

  constructor(
    private _http: ApiService,
    private _authService: NbAuthService,
    private _nbService: NbToastrService,
    ) {
    super(_nbService);
    }

}
