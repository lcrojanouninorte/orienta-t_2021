import { Deserializable } from './deserializable.model';

export class Answer implements Deserializable {
  id?: number;
  question_id?: string[];
  survey_id: any;
  value: any;
  checked?: any;
  deserialize?(input: any): this {
    Object.assign(this, input);
    input.checked = input.checked == 1 || input.checked == "1"   ? true: false;

    return this;
  }
  constructor(){
  }

}
