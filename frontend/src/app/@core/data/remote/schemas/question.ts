import { ValidatorFn, Validators } from '@angular/forms';
import { Answer } from './Answer';
import { Condition } from './condition';
import { Deserializable } from './deserializable.model';
import { Option } from './option';

export class Question implements Deserializable {
  id: number;
  section: string;
  code: string;
  text: string;
  desc?: string[];
  type: string;
  required: boolean;
  label:string;
  options: Option[];
  newOpt?: string;
  addingOption: boolean;
  start?: string;
  end?: string;
  validators: Array<ValidatorFn>;
  conditions: Array<Condition>;
  show: boolean;
  value: any;
  answers:  Array<Answer>;
  answer:  Array<any>;
  checked: boolean;
  deserialize?(input: any): this {
    //Set Validators
    input.validators = new Array<ValidatorFn>();
    input.required ? input.validators.push(Validators.required):input.required;
    input.isEmail ? input.validators.push(Validators.email):input.isEmail;
    input.show = true;
    //Set Conditions
    this.conditions ? input.options.map(condition => new Condition().deserialize(condition)) : [];
    this.answers ? input.answers.map(answer => new Answer().deserialize(answer)) : [];



    /*Object.assign(this, input);
    if(this.conditions){
       this.conditions.forEach(condition => {
      if(condition.question.id === this.id){
        condition.question = this
        this.show = condition.question.show;
      }
    });
    }*/
    this.options ? input.options.map(option => new Option().deserialize(option)) : [];
    this.checked = input.checked=="1" ? true: false;

    return this;
  }

  constructor(){
  }

}

