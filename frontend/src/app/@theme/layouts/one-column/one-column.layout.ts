import { Component, Input, OnInit } from '@angular/core';
import { MenuService } from '@core/utils/menu.service';
import { MENU_ITEMS } from '@modules/pages-menu';
import { NbAccessChecker } from '@nebular/security';
import { NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'ngx-one-column-layout',
  styleUrls: ['./one-column.layout.scss'],
  template: `
    <nb-layout windowMode>
        <nb-layout-header fixed>
          <ngx-header [color]="color" [without_sidebar_btn]="without_sidebar"></ngx-header>
        </nb-layout-header>
<!--
      <nb-layout-header subheader>
    <nb-actions>
      <nb-action icon="home-outline"></nb-action>
      <nb-action icon="search-outline"></nb-action>
      <nb-action icon="edit-outline"></nb-action>
    </nb-actions>
  </nb-layout-header>
-->
     <nb-sidebar *ngIf="_accessChecker.isGranted('View Side Menu', 'all') | async"  state="compacted"   tag="menu-sidebar"  start>
        <!--<ng-content select="nb-menu"></ng-content>-->
        <nb-menu [items]="menu"  ></nb-menu>

      </nb-sidebar>

      <nb-layout-column>
        <ng-content select="router-outlet"></ng-content>
      </nb-layout-column>
<!--
      <nb-layout-footer fixed>
        <ngx-footer></ngx-footer>
      </nb-layout-footer>-->
    </nb-layout>

  `,
})

export class OneColumnLayoutComponent {
  @Input() color: string;
  @Input() without_sidebar: boolean;

  menu = MENU_ITEMS;
  constructor(
     public _accessChecker: NbAccessChecker,
    private menuService: MenuService) {
    menuService.setMenuItemVisibility(this.menu);

  }
}
