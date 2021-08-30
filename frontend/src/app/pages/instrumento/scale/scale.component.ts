import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Answer } from '@core/data/remote/schemas/Answer';

@Component({
  selector: 'ngx-scale',
  templateUrl: './scale.component.html',
  styleUrls: ['./scale.component.scss']
})
export class ScaleComponent implements OnInit {


  @Output() onChange = new EventEmitter<string>();
  @Input() value:string;

  options = [
    { state:false, value: '4', label: 'love' },
    { state:false, value: '3', label: 'like' },
    { state:false, value: '2', label: 'not-sure' },
    { state:false, value: '1', label: 'not-like' },
  ];
  constructor() { }

  ngOnInit(): void {

  }

  setValue(selected_value){
    //Update others options

    this.value = selected_value;
    this.onChange.emit(this.value);
  }



}
