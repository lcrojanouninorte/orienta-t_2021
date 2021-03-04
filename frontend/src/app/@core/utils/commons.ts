import { NbToastrService } from '@nebular/theme';
import { Observable, of } from 'rxjs';

export abstract class Commons {
  
  constructor(private _toastrService: NbToastrService ) {

  }
  public toFormData<T>(values: any) {
    const formData = new FormData();
    for (const key of Object.keys(values)) {
      const value = values[key];
      formData.append(key, value);
    }
    return formData;
  }
  // TODO pasar a una clase abstracta
  private index: number = 0;
  public showToast(position, status, msj) {
    this.index += 1;
    this._toastrService.show(
      msj,
      `Información`,
      { limit: 3, position, status });
  }

  /**
     * Handle Http operation that failed.
     * Let the app continue.
  * @param operation - name of the operation that failed
  * @param result - optional value to return as the observable result
  */
  protected handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  /** Log a Station message with the MessageService */
  protected log(message: string) {
    // this.messageService.add(`StationService: ${message}`);
  }

  private data:any|any[];
  setData(data:any|any[]){
    this.data = data;
  } 

  getData(){
      return this.data || [];
  }

  hasData(){
      return this.data && this.data.length;
  }

}
