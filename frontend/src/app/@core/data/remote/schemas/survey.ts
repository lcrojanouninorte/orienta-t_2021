import { Deserializable } from './deserializable.model';
import { Surveyed } from './surveyed';

export class Survey implements Deserializable {
  id?: number;
  questions?: string[];
  uuid: any;
  surveyed?: Surveyed;
  created_at?:any;
  updated_at?:any;
  deserialize?(input: any): this {
    Object.assign(this, input);
    this.surveyed ?  new Surveyed().deserialize(input.surveyed)   : [];

    return this;
  }
  constructor(){
  }

}
