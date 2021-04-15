import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LayoutService } from '@core/utils';
import { MenuService } from '@core/utils/menu.service';
import { MENU_ITEMS } from '@modules/pages-menu';
import { NbAccessChecker } from '@nebular/security';
import { Subject } from 'rxjs';

@Component({
  selector: 'ngx-onu-mujeres',
  templateUrl: './onu-mujeres.component.html',
  styleUrls: ['./onu-mujeres.component.scss']
})
export class OnuMujeresComponent implements OnInit {

  constructor(  
    private accessChecker: NbAccessChecker,
    private menuService: MenuService, 
    private route: ActivatedRoute,
    private ls: LayoutService,) {    
      // menuService.setMenuItemVisibility(this.menu);
    }
  menu = MENU_ITEMS;  private destroy$: Subject<void> = new Subject<void>();

  ngOnInit(): void {
  }

}
