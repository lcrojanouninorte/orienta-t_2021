import { Component, Input, OnInit } from '@angular/core';
import { Level } from '@core/data/remote/schemas/level';
import { Occupation } from '@core/data/remote/schemas/occupation';

@Component({
  selector: 'ngx-level-listing',
  templateUrl: './level-listing.component.html',
  styleUrls: ['./level-listing.component.scss']
})
export class LevelListingComponent implements OnInit {

  @Input() level: Level;
  readMore = false;
  constructor() { }

  ngOnInit(): void {
  }

}
