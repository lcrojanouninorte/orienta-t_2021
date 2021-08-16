import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Option } from '@core/data/remote/schemas/option';

@Component({
  selector: 'ngx-scale',
  templateUrl: './scale.component.html',
  styleUrls: ['./scale.component.scss']
})
export class ScaleComponent implements OnInit {

  value:string;
  @Output() onChange = new EventEmitter<string>();
  options = [
    { state:false, value: '1', label: 'love' },
    { state:false, value: '2', label: 'like' },
    { state:false, value: '3', label: 'not-sure' },
    { state:false, value: '4', label: 'not-like' },
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
