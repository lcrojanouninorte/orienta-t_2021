 import { Component, Input, OnInit } from '@angular/core';
import { Survey } from '@core/data/remote/schemas/survey';


@Component({
  selector: 'ngx-seccion1',
  templateUrl: './seccion1.component.html',
  styleUrls: ['./seccion1.component.scss']
})
export class Seccion1Component implements OnInit {
  @Input() survey? : Survey;



  constructor(

  ) { }
  myDate = new Date();

  ngOnInit(): void {


  }






}
