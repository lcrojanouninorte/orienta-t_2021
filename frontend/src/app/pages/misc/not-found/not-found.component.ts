import { Component, OnInit } from '@angular/core';
import { NbMenuService } from '@nebular/theme';

@Component({
  selector: 'ngx-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor(private menuService: NbMenuService) {
  }
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  goToHome() {
    this.menuService.navigateHome();
  }
}
