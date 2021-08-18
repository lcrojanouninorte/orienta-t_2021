import { Deserializable } from './deserializable.model';

export class Answer implements Deserializable {
  id?: number;
  question_id?: string[];
  survey_id: any;
  value: any;
  checked?: boolean;
  deserialize?(input: any): this {
    Object.assign(this, input);
    this.checked = input.checked == 1 ? true: false;

    return this;
  }
  constructor(){
  }

}
