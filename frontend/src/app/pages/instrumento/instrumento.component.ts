import { Component, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LottieService } from '@core/data/vendors/services/lottie.service';
import { LayoutService } from '@core/utils';
import { MenuService } from '@core/utils/menu.service';
import { MENU_ITEMS } from '@modules/pages-menu';
import { NbAccessChecker } from '@nebular/security';

import { Location } from '@angular/common';

@Component({
  selector: 'ngx-instrumento',
  templateUrl: './instrumento.component.html',
  styleUrls: ['./instrumento.component.scss']
})
export class InstrumentoComponent implements OnInit {


  constructor(  ) {


    }

  ngOnInit(): void {
  }

}
