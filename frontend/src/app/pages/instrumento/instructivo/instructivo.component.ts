import { Component, OnInit } from '@angular/core';
import { User } from '@core/data/remote/schemas/users';
import { AuthService } from '@core/data/remote/services/auth.service';
import { LottieService } from '@core/data/vendors/services/lottie.service';
import { MENU_ITEMS } from '@modules/pages-menu';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { Location } from '@angular/common';

@Component({
  selector: 'ngx-instructivo',
  templateUrl: './instructivo.component.html',
  styleUrls: ['./instructivo.component.scss']
})
export class InstructivoComponent implements OnInit {
  user: User;
  constructor(    public _lottieSrv: LottieService,
    private _authService: AuthService,
    private location: Location,

    ) {
      this._authService.getCurrentUser()
      .subscribe((user: User) => {
        if (user) {
          this.user = user;
        }
      });

    }

  ngOnInit(): void {
  }
  back(){
    this.location.back();

  }
/**
   *
   * Lottie
   */

 private animationItem: AnimationItem;
 public options: AnimationOptions  =  this._lottieSrv.getOptions('logo-orienta-t',{'loop':false } );
 public options2: AnimationOptions  =  this._lottieSrv.getOptions('start-orienta-t',{'loop':true } );

 animationCreated(animationItem: AnimationItem, speed): void {
   this.animationItem = animationItem;
   this._lottieSrv.animationCreated(animationItem,{
     'speed':speed
   });
 }
}
