import { Deserializable } from './deserializable.model';

export class Onet implements Deserializable {
  cno_onet_id?: number;
  title?: string;
  desc?: string;
  icon?: string;
  onets?: Onet;
  outputs?: any[];

  deserialize?(input: any): this {
    Object.assign(this, input);
    //this.onet ?  new Onet().deserialize(input.pps)   : [];

    return this;
  }
  constructor(){
  }

}
