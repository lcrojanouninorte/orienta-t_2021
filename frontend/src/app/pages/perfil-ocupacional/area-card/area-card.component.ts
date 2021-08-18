import { Component, OnInit } from '@angular/core';
// import Swiper core and required modules
import SwiperCore from 'swiper/core';
@Component({
  selector: 'ngx-area-card',
  templateUrl: './area-card.component.html',
  styleUrls: ['./area-card.component.scss']
})
export class AreaCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onSwiper(swiper) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }
}
