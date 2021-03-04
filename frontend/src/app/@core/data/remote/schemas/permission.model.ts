import { Deserializable } from './deserializable.model';
const filter = ({  id, name, active, roles }) => ({  id, name, active, roles});

export class Permission implements Deserializable {
  name: string;
  active: boolean;
  roles?: Array<any>;
  deserialize(input: any): this {
    return  Object.assign(this,  filter(input));
  }
}
