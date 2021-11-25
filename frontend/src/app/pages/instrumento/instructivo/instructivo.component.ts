import { Component, OnInit } from '@angular/core';
import { User } from '@core/data/remote/schemas/users';
import { AuthService } from '@core/data/remote/services/auth.service';
import { LottieService } from '@core/data/vendors/services/lottie.service';
import { MENU_ITEMS } from '@modules/pages-menu';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { Location } from '@angular/common';
import { NbAccessChecker } from '@nebular/security';
import { SurveyService } from '@core/data/remote/services/survey.service';
import { Survey } from '@core/data/remote/schemas/survey';

@Component({
  selector: 'ngx-instructivo',
  templateUrl: './instructivo.component.html',
  styleUrls: ['./instructivo.component.scss']
})
export class InstructivoComponent implements OnInit {
  user: User;
  loading: boolean;
  survey : Survey = null;
  constructor(    public _lottieSrv: LottieService,
    private _authService: AuthService,
    private location: Location,
    public _accessChecker: NbAccessChecker,
    private _surveyService: SurveyService,


    ) {
      this._authService.getCurrentUser()
      .subscribe((user: User) => {
        if (user) {
          this.user = user;
        }
      });

    }

  ngOnInit(): void {
    //check if survey is finished
    this.getSurvey(this.user.id);

  }

  getSurvey(user_id) {
    this.loading = true;
    this._surveyService.getSurvey(user_id).subscribe({
      next: (survey: Survey) => {
        this.survey = survey;
        this.loading = false;
      },
    });
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
