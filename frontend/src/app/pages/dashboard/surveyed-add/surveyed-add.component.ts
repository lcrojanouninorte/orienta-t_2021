import { ThrowStmt } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Surveyed } from '@core/data/remote/schemas/surveyed';
import { SurveyService } from '@core/data/remote/services/survey.service';

@Component({
  selector: 'ngx-surveyed-add',
  templateUrl: './surveyed-add.component.html',
  styleUrls: ['./surveyed-add.component.scss']
})
export class SurveyedAddComponent implements OnInit {
  @Input() population_id: string;
  @Output() added: EventEmitter<any> = new EventEmitter();
  surveyed: Surveyed = {name:"", identification:"", last_name: "", population_id:""};
  constructor(
   private _surveyService: SurveyService
  ) {

  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.surveyed.population_id = this.population_id;
    this._surveyService.addSurveyed( this.surveyed).subscribe((surveyed) => {
      this.added.emit(surveyed);
      this.surveyed =  new Surveyed;
    });

  }

}
