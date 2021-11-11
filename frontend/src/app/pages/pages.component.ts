import { Component } from '@angular/core';


@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout [color]="'blue'">
      <!--<nb-menu [items]="menu"  ></nb-menu>-->
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent {


}
