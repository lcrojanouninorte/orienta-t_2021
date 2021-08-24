import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PpsRank } from '@core/data/remote/schemas/pps_rank';
import { SurveyService } from '@core/data/remote/services/survey.service';
import { NbAccessChecker } from '@nebular/security';
import { NbLayoutScrollService } from '@nebular/theme';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
} from 'swiper/core';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
// import Swiper core and required modules
@Component({
  selector: 'ngx-area-card',
  templateUrl: './area-card.component.html',
  styleUrls: ['./area-card.component.scss']
})

export class AreaCardComponent implements OnInit {
  loading: boolean;
  showCard = false;
  @Input() ppsRanking = new Array<PpsRank>();

  public config = {
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween:50,
    keyboard: true,
    mousewheel: true,
    scrollbar: false,

    pagination: false,

    breakpoints:{
       640:{
            slidesPerView: 3,
            navigation: false,

           }
    }
};
  constructor(

  ) {

  }


  ngOnInit(): void {

  }

  toggleCard(ppsRank) {
    ppsRank.showCard = !ppsRank.showCard;
  }

  onSwiper(swiper) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }
}


