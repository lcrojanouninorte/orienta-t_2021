import { Component, OnInit } from '@angular/core';
import { NbAuthBlockComponent } from '@nebular/auth';

@Component({
  selector: 'auth-block',
  templateUrl: './auth-block.component.html',
  styleUrls: ['./auth-block.component.scss']
})
export class AuthBlockComponent extends NbAuthBlockComponent implements OnInit {

  ngOnInit(): void {
  }

}
