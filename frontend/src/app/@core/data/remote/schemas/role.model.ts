import { Permission } from './permission.model';
import { Deserializable } from './deserializable.model';

export class Role implements Deserializable {
  id: any;
  name: string;
  update_at: string;
  permissions_count: number;
  users_count: number;
  description?: string;
  permissions?: Permission[] ;
  Admin?: any;
  Staff?: any;
  General?: any;
  Other?: any;
  deserialize(input: any): this {

    // Assign input to our object BEFORE deserialize our permissions to prevent already deserialized permissions from being overwritten.
    Object.assign(this, input);
    // Iterate over all permissions for our user and map them to a proper `Car` model
    this.permissions ? input.permissions.map(permission => new Permission().deserialize(permission)) : [];
    return this;
  }

  constructor(permissions?: Permission[]) {
    this.id = '';
    this.name = '';
    this.description = '';
    this.permissions = permissions  ;
  }

}
