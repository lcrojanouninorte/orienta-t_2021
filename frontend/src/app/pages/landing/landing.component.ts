import { Component, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LottieService } from '@core/data/vendors/services/lottie.service';
import { LayoutService } from '@core/utils';
import { MenuService } from '@core/utils/menu.service';
import { MENU_ITEMS } from '@modules/pages-menu';
import { NbAccessChecker } from '@nebular/security';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { Subject } from 'rxjs';
import { Location } from '@angular/common';
import { NbAuthService } from '@nebular/auth';

@Component({
  selector: 'ngx-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(

    public _lottieSrv: LottieService,
    private ngZone: NgZone,

    public  router: Router,
    private accessChecker: NbAccessChecker,
    private menuService: MenuService,
    private route: ActivatedRoute,
    private ls: LayoutService,private _guestGuard: NbAuthService,private location: Location) {

    }

  ngOnInit(): void {

    this._guestGuard.isAuthenticated()
    .subscribe(authenticated => {
      if (authenticated) {
        this.location.back();

        return false;
      } else {
        return true;
      }
    });
  }

  menu = MENU_ITEMS;  private destroy$: Subject<void> = new Subject<void>();

     /**
   *
   * Lottie
   */

      private animationItem: AnimationItem;
      public options: AnimationOptions  =  this._lottieSrv.getOptions('logo-orienta-t',{'loop':false } );
      public options2: AnimationOptions  =  this._lottieSrv.getOptions('landing-orienta-t',{'loop':true } );

      animationCreated(animationItem: AnimationItem, speed): void {
        this.animationItem = animationItem;
        this._lottieSrv.animationCreated(animationItem,{
          'speed':speed
        });
      }

     //END LOTTIE
}
