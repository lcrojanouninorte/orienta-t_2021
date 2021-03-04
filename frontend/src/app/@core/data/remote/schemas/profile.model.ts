import { Deserializable } from './deserializable.model';
// const filter = ({  id,name, active, roles }) => ({  id,name, active, roles});

export class Profile {
    first_name?: string;
    last_name?: string;
    gender?: string;
    avatar?: string;
    configs?: string;
}
