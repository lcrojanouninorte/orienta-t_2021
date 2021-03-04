import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { delay, shareReplay, debounceTime } from 'rxjs/operators';

@Injectable()
export class LayoutService {

  protected layoutSize$ = new Subject();
  layout = {type: 'normal'}
  protected layoutType$ = new Subject<{type: string}>();
  protected layoutSizeChange$ = this.layoutSize$.pipe(
    shareReplay({ refCount: true }),
  );
  protected layoutTypeChange$ = this.layoutType$.pipe(
    shareReplay({ refCount: true }),
  );
  /*Layout Size*/
  changeLayoutSize() {
    this.layoutSize$.next();
  }

  onChangeLayoutSize(): Observable<any> {
    return this.layoutSizeChange$.pipe(delay(1));
  }

  onSafeChangeLayoutSize(): Observable<any> {
    return this.layoutSizeChange$.pipe(
      debounceTime(350),
    );
  }
  /*Layout Type*/
  
  changeLayouType(name: string) {
    this.layoutType$.next({type: name});
  }

  onChangeLayoutType(): Observable<{type: string}> {
    return this.layoutTypeChange$.pipe(delay(1));
  }

  onSafeChangeLayoutType(): Observable<any> {
    return this.layoutTypeChange$.pipe(
      debounceTime(350),
    );
  }
}
