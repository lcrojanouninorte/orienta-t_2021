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
import { MENU_ITEMS } from '@modules/pages-menu';

@Component({
  selector: 'ngx-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],

})
export class AuthComponent extends NbAuthComponent  {
  isOpen = false;
  menu = MENU_ITEMS;

  constructor(
    auth: NbAuthService,
    location: Location,
    public _lottieSrv: LottieService,
    private ngZone: NgZone,

    public  router: Router) {
    super(auth, location);
  }

  public state = 'final';


     /**
   *
   * Lottie
   */

      private animationItem: AnimationItem;
      public options: AnimationOptions  =  this._lottieSrv.getOptions('login-orienta-t',{'loop':true} );
      animationCreated(animationItem: AnimationItem, speed): void {
        this.animationItem = animationItem;
        this._lottieSrv.animationCreated(animationItem,{
          'speed':speed
        });
      }
      stop(): void {
        this.ngZone.runOutsideAngular(() => this.animationItem.stop());
      }

     //END LOTTIE
}
