import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpClient } from '@angular/common/http';
import { Injector, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
  })
export class HttpClientInterception implements HttpInterceptor {
    constructor(private injector: Injector) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('intercetption ');
        console.log(this.authService.request);
        const modified = req.clone({ setHeaders: { 'Content-Type': 'application/json' } });
        return next.handle(modified);
    }
    protected get authService(): HttpClient {
        return this.injector.get(HttpClient);
    }
}
