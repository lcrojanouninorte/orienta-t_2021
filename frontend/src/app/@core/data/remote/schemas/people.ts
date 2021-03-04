export class People {
    id: any;
    name?: string;
    title?: string;
    tag?: string;
    avatar?: string;
    order: string;
    rg: string;
    icon?: string;

    deserialize(input: any): this {
        Object.assign(this, input);
      return this;
    }
  
    constructor() {
      this.id = '';
      this.name = '';
      this.title = '';
      this.avatar = ''  ;
    }
}
