import { Deserializable } from './deserializable.model';

export class Answer implements Deserializable {
  id?: number;
  question_id?: string[];
  survey_id: any;
  value: any;
  deserialize?(input: any): this {
    Object.assign(this, input);
    return this;
  }
  constructor(){
  }

}
