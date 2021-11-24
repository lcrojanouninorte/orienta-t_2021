import { Component, Input, OnInit } from '@angular/core';
import { Occupation } from '@core/data/remote/schemas/occupation';

@Component({
  selector: 'ngx-ocupation-info-card',
  templateUrl: './ocupation-info-card.component.html',
  styleUrls: ['./ocupation-info-card.component.scss']
})
export class OcupationInfoCardComponent implements OnInit {
  @Input() data:any;
  @Input() title:string;
  @Input() showFooter:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
