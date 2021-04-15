import { Deserializable } from './deserializable.model';
import { Question } from './question';

export class Condition implements Deserializable {
  id?: number;
  question_id: number;
  restriction_id?: number;
  value?: string;
  label?: string;
  question: Question;
  question_index: number;


  deserialize?(input: any): this {
    Object.assign(this, input);
    this.question ? input.question.map(question => new Question().deserialize(question)) : [];

    return this;
  }
  constructor(){
  }

}

