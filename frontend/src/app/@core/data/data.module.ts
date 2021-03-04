import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleService } from './remote/services/role.service';

import { UserService } from './remote/services/users.service';
import { ApiService } from './remote/api.service';
import { LightboxModule } from 'ngx-lightbox';

const SERVICES = [
  UserService,
  RoleService,
  ApiService,
];

@NgModule({
  imports: [
    CommonModule,LightboxModule 
  ],
  providers: [
    ...SERVICES,
  ],
  declarations: [],
})
export class DataModule {
  static forRoot():  ModuleWithProviders<DataModule> {
    return {
      ngModule: DataModule,
      providers: [
        ...SERVICES,
      ],
    };
  }
}
