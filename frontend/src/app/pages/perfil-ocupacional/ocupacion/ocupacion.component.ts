import { Component, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Occupation } from '@core/data/remote/schemas/occupation';
import { SurveyService } from '@core/data/remote/services/survey.service';
import { LottieService } from '@core/data/vendors/services/lottie.service';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'ngx-ocupacion',
  templateUrl: './ocupacion.component.html',
  styleUrls: ['./ocupacion.component.scss']
})

export class OcupacionComponent implements OnInit {
  public config = {

    slidesPerView: 1,
    slidesPerColumn: 1,
    spaceBetween:30,
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    navigation: false,
    slidesPerColumnFill: 'row',

    breakpoints:{
       640:{
            slidesPerView: 3,
            slidesPerColumn: 2,

           }
    }
};
  title: string;
  occupation_infos: any[];
  loading: boolean;
  occupation: Occupation;

  constructor(
    private _Activatedroute: ActivatedRoute,
    private _surveyService: SurveyService,
    public _lottieSrv: LottieService,
    private ngZone: NgZone,

  ) {

    this.title = this._Activatedroute.snapshot.paramMap.get("title");
     if(this.title == null){
      //Mostar error
    }
    this.getOccupationByTitle(this.title);
   }

    getOccupationByTitle(title: string) {
      this.loading = true;
      this._surveyService.getOccupationByTitle(title).subscribe({
        next: (occupation : Occupation ) => {
          this.occupation = occupation;
          this.loading = false;
        },
      });
    }

  onSwiper(swiper) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }

  ngOnInit(): void {
  }
    /**
   *
   * Lottie
   */

     private animationItem: AnimationItem;
     public options: AnimationOptions  =  this._lottieSrv.getOptions('results-orienta-t',{'loop':true } );

     animationCreated(animationItem: AnimationItem, speed): void {
       this.animationItem = animationItem;
       this._lottieSrv.animationCreated(animationItem,{
         'speed':speed
       });
     }

    //END LOTTIE
}
