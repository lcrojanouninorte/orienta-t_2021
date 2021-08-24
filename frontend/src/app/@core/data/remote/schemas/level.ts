import { Deserializable } from './deserializable.model';
import { Occupation } from './occupation';

export class Level implements Deserializable {
  id?: number;
  code?: string;
  desc?: string;
  icon?: string;
  occupations: Occupation;

  deserialize?(input: any): this {
    Object.assign(this, input);
    this.occupations ?  new Occupation().deserialize(input.occupations)   : [];

    return this;
  }
  constructor(){
  }

}
