import { Component, Input, OnInit } from '@angular/core';
import { Question } from '@core/data/remote/schemas/question';

@Component({
  selector: 'ngx-scale-card',
  templateUrl: './scale-card.component.html',
  styleUrls: ['./scale-card.component.scss']
})
export class ScaleCardComponent implements OnInit {

  @Input() question: Question;
  constructor() { }

  ngOnInit(): void {

  }

}
