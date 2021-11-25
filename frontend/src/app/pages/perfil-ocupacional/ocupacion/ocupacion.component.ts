import { Component, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Occupation } from '@core/data/remote/schemas/occupation';
import { User } from '@core/data/remote/schemas/users';
import { AuthService } from '@core/data/remote/services/auth.service';
import { SurveyService } from '@core/data/remote/services/survey.service';
import { JsPDFService } from '@core/data/vendors/services/js-pdf.service';
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
    spaceBetween:20,
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    navigation: true,
    slidesPerColumnFill: 'row',
    effect: "cards",
    breakpoints:{
       640:{
            slidesPerView: 1,
            slidesPerColumn: 10,
            navigation: false,


           }
    }
};
  title: string;
  occupation_infos: any[];
  loading: boolean;
  occupation: Occupation;
  user: User;
  constructor(
    private _Activatedroute: ActivatedRoute,
    private _surveyService: SurveyService,
    public _lottieSrv: LottieService,
    private ngZone: NgZone,
    private jspdfService: JsPDFService,
    private _authService: AuthService,
  ) {

    this._authService.getCurrentUser()
    .subscribe((user: User) => {
      if (user) {
        this.user = user;
      }
    });

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
    this._Activatedroute.params.subscribe(
      params => {

        this.title =  this._Activatedroute.snapshot.paramMap.get("title").replace(/\+/g, " ") ;
        if(this.title == null){
         //Mostar error
        }
          this.getOccupationByTitle(this.title);
      }
  );


  }

  generatePdf(){
    this.jspdfService.downloadPDF("occupation");
  }

  printComponent(cmpName) {
   // Open used in new window
   let data = document.getElementsByClassName(cmpName)[0].innerHTML;
     var originalContents = document.body.innerHTML;

     document.body.innerHTML = data;

     window.print();

     document.body.innerHTML = originalContents;
  }

  sendmail(){
    /send_occupation_mail/
    this._surveyService.sendOccupationMail(this.title).subscribe(arg => alert(arg));

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
