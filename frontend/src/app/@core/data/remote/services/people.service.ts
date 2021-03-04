import { Injectable } from '@angular/core';
import { People } from '../schemas/people';
import { Observable } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { ApiService } from '../api.service';
import { Commons } from '../../../utils/commons';
import { NbToastrService } from '@nebular/theme';
const routes = {
  people: 'people',
  person: (id: number) => `people/${id}`,
  colabs: 'people/colabs',
  dirs: 'people/dirs',
};
@Injectable({
  providedIn: 'root',
})
export class PeopleService extends Commons{

  constructor(private http: ApiService, _toastrService: NbToastrService) { super(_toastrService)}
 
  getAll(): Observable<People[]> {
    return  this.http.get<People[]>(routes.people).pipe(
     tap(_ => this.log('Fetched People')),
     catchError(this.handleError<People[]>('getAll', [])),
    map(people => people.map(person => new People().deserialize(person))),
   );
  }

  getColabs(): Observable<People[]> {
    return  this.http.get<People[]>(routes.colabs).pipe(
      tap(_ => this.log('Fetched People')),
      catchError(this.handleError<People[]>('getColabs', [])),
    map(people => people.map(person => new People().deserialize(person))),
    );
  }
  getDirs(): Observable<People[]> {
    return  this.http.get<People[]>(routes.dirs).pipe(
     tap(_ => this.log('Fetched People')),
     catchError(this.handleError<People[]>('getDirs', [])),
    map(people => people.map(person => new People().deserialize(person))),
   );
  }
  /** POST: add a new category to the server */
  addPeople(person: FormData): Observable<any> {
    return this.http.postFormData<People>(routes.people, person, {
      reportProgress: true,
      observe: 'events'
    }).pipe(
      tap(_ => this.log(`create People `)),
      catchError(this.handleError<People>('addPeople')),
    );
  }
   /** DELETE: delete the People from the server */
   deletePerson(people: People | number): Observable<People> {
    const id = typeof people === 'number' ? people : people.id;
    const url = routes.person(id);

    return this.http.delete<People>(url).pipe(
      tap(_ => this.log(`deleted people id=${id}`)),
      catchError(this.handleError<People>('deletePeople')),
    );
  }
}
