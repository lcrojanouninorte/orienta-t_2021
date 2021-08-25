import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {  FormGroup } from '@angular/forms';
import { Question } from '@core/data/remote/schemas/question';

@Component({
  selector: 'ngx-scale-card',
  templateUrl: './scale-card.component.html',
  styleUrls: ['./scale-card.component.scss']
})
export class ScaleCardComponent implements OnInit {

  @Input() question: Question;
  @Input() form: FormGroup;
  @Output() isDone = new EventEmitter<boolean>();
  @Output() onChange = new EventEmitter<boolean>();

  done: number = 0;
  constructor() { }

  ngOnInit(): void {

  }

  setOptionValue(option,$event){
    //Update Parent formcontrol.
    if(this.form?.controls){

      this.form.controls[this.question.label + "_" + option.subcode].setValue($event) ;
      this.question.answer[this.question.label+"_"+option.subcode] = $event;
      //Eval if this questions have all options answered.
      this.checkIfQuestionIsdone();
      if(this.done == 4 ){
        if(this.question.answers.length>0){
            this.question.checked = true;
            this.question.answers[0].checked = true;
            this.isDone.emit(true);
        }else{
          this.question.checked = true;
          this.question.answers[0] = {"checked" : true, "survey_id":"", "value":"" };
          this.isDone.emit(true);
        }
      }
      this.onChange.emit(true);
    }

  }

  checkIfQuestionIsdone(){
    this.done = 0;

    this.question.options.map(option=>{
      if(!(["null", "", null].includes(this.form.controls[this.question.label + "_" + option.subcode].value )  )){
        this.done++;
      }
    })
  }

}
