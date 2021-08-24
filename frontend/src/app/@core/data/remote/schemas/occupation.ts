import { Deserializable } from './deserializable.model';

export class Occupation implements Deserializable {
  id?: number;
  title?: string;
  desc?: string;
  icon?: string;
  knowledges?:any[];
  skills?:any[];
  outputs?:any[];
  onet?:any[];

  deserialize?(input: any): this {
    Object.assign(this, input);
    //this.onet ?  new Onet().deserialize(input.pps)   : [];

    return this;
  }
  constructor(){
  }

}
