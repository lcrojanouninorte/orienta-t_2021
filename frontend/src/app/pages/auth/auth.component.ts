import { Component, OnInit, AfterViewInit, NgZone } from '@angular/core';
import { NbAuthComponent, NbAuthService } from '@nebular/auth';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
  // ...
} from '@angular/animations';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AnimationItem } from 'lottie-web';
import { LottieService } from '@core/data/vendors/services/lottie.service';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'ngx-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  animations: [
    trigger('openClose', [
      // ...
      state('closed', style({
        left: '0%',
        opacity: '100%',

      })),
      state('open', style({
        left: '50%',
        opacity: '0',
      })),
      transition('open => closed', animate('1000ms ease-in', keyframes([
        style({ left: '50%', opacity: '0',   offset: 0 }),
        style({left: '25%', opacity: '1', offset: 0.5 }),
        style({ left: '0%', offset: 1 }),
      ]))),
      transition('closed => open', animate('1000ms ease-out', keyframes([
        style({ left: '0%', opacity: '1', offset: 0 }),
        style({left: '25%', opacity: '0', offset: 0.5 }),
        style({ left: '50%',    offset: 1 }),
      ]))),
    ]),
  ],
})
export class AuthComponent extends NbAuthComponent implements AfterViewInit {
  isOpen = false;

  constructor(
    auth: NbAuthService,
    location: Location,
    public _lottieSrv: LottieService,
    private ngZone: NgZone,

    public  router: Router) {
    super(auth, location);
  }
  toggle() {
    this.isOpen = !this.isOpen;
  }
  public state = 'final';
  ngAfterViewInit() {
    setTimeout(() => {
      this.isOpen = true;
      this.state = 'initial';
    }, 0);
  }

  onEnd(event) {
    this.state = 'initial';
    if (event.toState === 'initial') {
      setTimeout(() => {
        this.state = 'final';
      }, 3000);
    }
  }

     /**
   *
   * Lottie
   */

      private animationItem: AnimationItem;
      public options: AnimationOptions  =  this._lottieSrv.getOptions('women',{'loop':true, 'initialSegment':[0,90]} );
      animationCreated(animationItem: AnimationItem, speed): void {
        this.animationItem = animationItem;
        this._lottieSrv.animationCreated(animationItem,{
          'speed':speed
        });
      }
      stop(): void {
        this.ngZone.runOutsideAngular(() => this.animationItem.stop());
      }
      opened(): void {
        this.ngZone.runOutsideAngular(() => this.animationItem.playSegments([0,120]));
      }
      closed(): void {
        this.ngZone.runOutsideAngular(() => this.animationItem.playSegments([120,230]));
      }
     //END LOTTIE
}
