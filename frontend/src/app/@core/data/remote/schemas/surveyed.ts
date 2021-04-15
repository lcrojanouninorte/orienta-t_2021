import { Deserializable } from './deserializable.model';

export class Surveyed implements Deserializable {
  id?: number;
  first_name?: string;
  last_name?: string;
  identification?: string;
  name?: string;
  population_id?: string;
  deserialize?(input: any): this {
    input.name = input.first_name + " " + input.last_name;
    Object.assign(this, input);
    return this;
  }
  constructor(){
  }

}
