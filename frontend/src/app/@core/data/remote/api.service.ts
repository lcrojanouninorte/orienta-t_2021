import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})

export class ApiService extends  HttpClient {
  private REST_API_SERVER = environment.baseUrl.api;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'}),
  };
  public constructor(handler: HttpHandler) {
    super(handler);
  }
  public get2<T>(url: string, options?: Object): Observable<any> {
     if(options){
      return super.get(url, options );

    } 
  }
  public get<T>(url: string, options?: Object): Observable<any> {
    url = this.REST_API_SERVER + url;
    if(options){
      return super.get(url, options );

    }else{

      return super.get(url, this.httpOptions );
    }
  }
  public put<T>(url: string, obj?: Object, options?: Object): Observable<any> {
    url = this.REST_API_SERVER + url;
    return super.put(url,  obj, this.httpOptions );
  }
  public post<T>(url: string, obj?: Object, options?: Object): Observable<any> {
    url = this.REST_API_SERVER + url;
    return super.post(url, obj, this.httpOptions );
  }
  public postFormData<T>(url: string, obj?: Object, options?: Object): Observable<any> {
    url = this.REST_API_SERVER + url;
    return super.post(url, obj, options );
  }
  public delete<T>(url: string, obj?: Object, options?: Object): Observable<any> {
    url = this.REST_API_SERVER + url;
    return super.delete(url, obj);
  }

}
