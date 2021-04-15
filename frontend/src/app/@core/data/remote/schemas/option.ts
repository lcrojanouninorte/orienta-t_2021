import { Deserializable } from './deserializable.model';

export class Option implements Deserializable {
  id?: number;
  question_id: number;
  subcode?: string;
  text: string;
  value?: string;


  deserialize?(input: any): this {
    Object.assign(this, input);
    return this;
  }
  constructor(){
  }

}

