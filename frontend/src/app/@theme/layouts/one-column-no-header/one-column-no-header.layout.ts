import { Component, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'ngx-one-column-no-header-layout',
  styleUrls: ['./one-column-no-header.layout.scss'],
  template: `
    <nb-layout windowMode>
  
 <!--
      <nb-layout-header subheader>
    <nb-actions>
      <nb-action icon="home-outline"></nb-action>
      <nb-action icon="search-outline"></nb-action>
      <nb-action icon="edit-outline"></nb-action>
    </nb-actions>
  </nb-layout-header>
-->
     <nb-sidebar  state="collapsed" class="menu-sidebar" tag="menu-sidebar" responsive start>
        <ng-content select="nb-menu"></ng-content>
      </nb-sidebar>

      <nb-layout-column>
             
      <ngx-header></ngx-header>
        <ng-content select="router-outlet"></ng-content>
      </nb-layout-column>
<!--
      <nb-layout-footer fixed>
        <ngx-footer></ngx-footer>
      </nb-layout-footer>
    </nb-layout>
-->
  `,
})

export class OneColumnNoHeaderLayoutComponent {
  constructor() {
  }
   
}
