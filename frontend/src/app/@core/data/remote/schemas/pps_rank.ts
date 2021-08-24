import { Deserializable } from './deserializable.model';
import { Pps } from './pps';

export class PpsRank implements Deserializable {
  id?: number;
  survey_id?: number;
  cno_professional_profile_id: number;
  total?: number;
  pps?: Pps;
  deserialize?(input: any): this {
    Object.assign(this, input);
    this.pps ?  new Pps().deserialize(input.pps)   : [];

    return this;
  }
  constructor(){
  }

}
