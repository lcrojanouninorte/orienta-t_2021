import { Deserializable } from './deserializable.model';
import { Surveyed } from './surveyed';

export class Population implements Deserializable {
  id?: number;
  name?: string[];
  uuid: any;
  active: boolean;
  surveyeds: Surveyed[];
  created_at?:any;
  updated_at?:any;
  surveys?:any;
  file_path?: string;
  deserialize?(input: any): this {
    Object.assign(this, input);
    this.surveyeds ? input.surveyeds.map(surveyed => new Surveyed().deserialize(surveyed)) : [];

    return this;
  }
  constructor(){
  }

}
