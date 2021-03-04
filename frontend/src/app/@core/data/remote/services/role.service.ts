import { Injectable } from '@angular/core';
import { Role } from '../schemas/role.model';
import { ApiService } from '../api.service';
import {Observable, throwError, of} from 'rxjs';
import {map, catchError, tap } from 'rxjs/operators';
import { Permission } from '../schemas/permission.model';
import { HttpHeaders } from '@angular/common/http';

const routes = {
  roles: 'roles',
  role: (id: number) => `roles/${id}`,
  permissions: 'permissions',
};
@Injectable({
  providedIn: 'root',
})
export class RoleService   {

  constructor( private http: ApiService) {
  }

  getAll(): Observable<Role[]> {
       return  this.http.get<Role[]>(routes.roles).pipe(
        tap(_ => this.log('Fetched Roles')),
        catchError(this.handleError<Role[]>('getAll', [])),
       map(roles => roles.map(role => new Role().deserialize(role))),
      );
  }
/** Log a Role message with the MessageService */
private log(message: string) {
  // this.messageService.add(`RoleService: ${message}`);
}
    getSingle(id: number): Observable<Role> {
    return this.http.get<Role>(routes.role(id)).pipe(
      map(role => new Role().deserialize(role)),
      catchError(() => throwError('Role not found')),
      );
    }

    /** PUT: update the Role on the server */
    updateRole(role: Role): Observable<any> {
      return this.http.put(routes.role(role.id), role).pipe(
        tap(_ => this.log(`updated role id=${role.id}`)),
        catchError(this.handleError<any>('updateRoles')),
      );
    }

    /** POST: add a new role to the server */
    addRole(role: Role): Observable<Role> {
      return this.http.post<Role>(routes.roles, role).pipe(
        tap(_ => this.log(`create role id=${role.id}`)),
        catchError(this.handleError<Role>('addRole')),
      );
    }
    /** DELETE: delete the Role from the server */
    deleteRole(role: Role | number): Observable<Role> {
      const id = typeof role === 'number' ? role : role.id;
      const url = routes.role(id);

      return this.http.delete<Role>(url).pipe(
        tap(_ => this.log(`deleted role id=${id}`)),
        catchError(this.handleError<Role>('deleteRole')),
      );
    }

    /* GET roles whose name contains search term */
    searchRoles(term: string): Observable<Role[]> {
      if (!term.trim()) {
        // if not search term, return empty role array.
        return of([]);
      }
      return this.http.get<Role[]>(`${routes.roles}/?name=${term}`).pipe(
        tap(x => x.length ?
          this.log(`found Roles matching "${term}"`) :
          this.log(`no Roles matching "${term}"`)),
        catchError(this.handleError<Role[]>('searchRoles', [])),
        );
    }

    getData() {
      // return this.data;
    }
    getSystemPermissions(): Observable<Permission[]> {
      return  this.http.get<Permission[]>(routes.permissions).pipe(
        tap(_ => this.log('Fetched Permission')),
        catchError(this.handleError<Role[]>('getSystemPermissions', [])),
        map(permissions => permissions.map(permission => new Permission().deserialize(permission))),
      );
    }
    /**
     * Handle Http operation that failed.
     * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

}
