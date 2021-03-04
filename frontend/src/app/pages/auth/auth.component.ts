import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NbAuthComponent, NbAuthService } from '@nebular/auth';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
  // ...
} from '@angular/animations';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'ngx-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  animations: [
    trigger('moveBg', [
      // ...
      state('final', style({
        'background-size': '100%',
        'background-position': 'center',
      })),
      state('initial', style({
        'background-size': '150%',
        'background-position': 'center',

      })),
      transition('initial => final', animate('80s 1000ms linear', keyframes([
        style({
        'background-size': '150%',
         offset: 0 }),
        style({'background-size': '125%',
          offset: 0.5 }),
        style({ 'background-size': '100%',
         offset: 1 }),
      ]))),
      transition('final => initial', animate('80s 1000ms linear', keyframes([
        style({ 'background-size': '100%',
         offset: 0 }),
        style({'background-size': '125%',
          offset: 0.5 }),
        style({
          'background-size': '150%',
            offset: 1 }),
      ]))),
    ]),
    trigger('openClose', [
      // ...
      state('closed', style({
        left: '0%',
        opacity: '100%',

      })),
      state('open', style({
        left: '50%',
        opacity: '0',
      })),
      transition('open => closed', animate('1000ms ease-in', keyframes([
        style({ left: '50%', opacity: '0',   offset: 0 }),
        style({left: '25%', opacity: '1', offset: 0.5 }),
        style({ left: '0%', offset: 1 }),
      ]))),
      transition('closed => open', animate('1000ms ease-out', keyframes([
        style({ left: '0%', opacity: '1', offset: 0 }),
        style({left: '25%', opacity: '0', offset: 0.5 }),
        style({ left: '50%',    offset: 1 }),
      ]))),
    ]),
  ],
})
export class AuthComponent extends NbAuthComponent implements AfterViewInit {
  isOpen = false;
  constructor(
    auth: NbAuthService,
    location: Location,
    public  router: Router) {
    super(auth, location);
  }
  toggle() {
    this.isOpen = !this.isOpen;
  }
  public state = 'final';
  ngAfterViewInit() {
    setTimeout(() => {
      this.isOpen = true;
      this.state = 'initial';
    }, 0);
  }

  onEnd(event) {
    this.state = 'initial';
    if (event.toState === 'initial') {
      setTimeout(() => {
        this.state = 'final';
      }, 3000);
    }
  }
}
