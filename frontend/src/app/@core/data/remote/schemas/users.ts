import { Observable } from 'rxjs';
import { Profile } from './profile.model';
import { Role } from './role.model';
import { Deserializable } from './deserializable.model';
import { NbAccessControl } from '@nebular/security';

export class User implements Deserializable {
  id?: number;
  roles?: string[];
  roles_names?: string[];
  acl?: NbAccessControl;
  email?: string;
  password?: string;
  password_confirmation?: string;
  options?: string;
  profile?: Profile;
  type?: string;
  name?: string;
  picture?: string;
  base_role?: string;

  deserialize?(input: any): this {
    Object.assign(this, input);
    this.roles ? input.roles.map(roles => new Role().deserialize(roles)) : [];
    return this;
  }
  constructor(){
    this.email = "Visitante";
  }

}

export interface Contacts {
  user: User;
  type: string;
}

export interface RecentUsers extends Contacts {
  time: number;
}
