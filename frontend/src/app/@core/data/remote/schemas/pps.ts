import { Deserializable } from './deserializable.model';
import { Onet } from './onet';

export class Pps implements Deserializable {
  id?: number;
  code?: string;
  title: string;
  desc?: string;
  icon?: string;
  onets?: Onet[];


  deserialize?(input: any): this {
    Object.assign(this, input);
    this.onets ?   input.onets.map(onet => new Onet().deserialize(onet)) : [];

    return this;
  }
  constructor(){
  }

}
