import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-panel-summary',
  templateUrl: './panel-summary.component.html',
  styleUrls: ['./panel-summary.component.scss']
})
export class PanelSummaryComponent implements OnInit {
  @Input() summary: {title: string; value: number}[];

  constructor() { }

  ngOnInit(): void {
  }

}
