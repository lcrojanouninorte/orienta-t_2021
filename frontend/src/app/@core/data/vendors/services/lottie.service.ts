import { Injectable, NgZone } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Injectable({
  providedIn: 'root',
})
export class LottieService {
  assets = {
    'women': 'assets/lottie/women.json',
  };

  constructor(  private ngZone: NgZone) { }

  private animationItem: AnimationItem;

  public getOptions(assets_name: string, options: AnimationOptions = {}) {

    options['path'] =  this.assets[assets_name];

    return options;
  }
  animationCreated(animationItem: AnimationItem, options: any = {}): void {
    this.animationItem  = animationItem;
      options.speed ? this.animationItem.setSpeed(options.speed) : '';

    if (options.playSegments) {
      this.ngZone.runOutsideAngular(() =>
        this.animationItem.playSegments(options.playSegments),
      );
    }
  }

  stop(animationItem: AnimationItem, options:any ={}): void {
    this.ngZone.runOutsideAngular(() =>this.animationItem.stop());
  }

  opened(animationItem: AnimationItem,options:any ={}): void {
    this.ngZone.runOutsideAngular(() =>
      this.animationItem.playSegments(options.playSegments),
    );
  }
  closed(animationItem: AnimationItem, options:any ={}): void {
    this.ngZone.runOutsideAngular(() =>
      this.animationItem.playSegments(options.playSegments),
    );
  }
}
