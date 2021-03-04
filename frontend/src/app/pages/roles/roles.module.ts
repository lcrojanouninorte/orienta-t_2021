import { NgModule } from '@angular/core';
import {
  NbCardModule,
  NbIconModule,
  NbInputModule,
  NbTreeGridModule,
  NbSelectModule,
  NbDatepickerModule,
  NbRadioModule,
  NbCheckboxModule,
  NbUserModule,
  NbActionsModule,
  NbButtonModule,
  NbToggleModule} from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { TablesRoutingModule, routedComponents } from './roles-routing.module';
import { CustomRenderRowComponent } from './custom-render-row/custom-render-row.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PermissionsComponent } from './permissions/permissions.component';
import { CustomRenderRowButtonsComponent } from './custom-render-row/custom-render-row-buttons.component';
import { UsersModule } from '../users/users.module';

@NgModule({
  imports: [
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    TablesRoutingModule,
    Ng2SmartTableModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    NbSelectModule,
    NbToggleModule,
    ReactiveFormsModule,
    UsersModule,

  ],
  declarations: [
    ...routedComponents,
    CustomRenderRowComponent,
    CustomRenderRowButtonsComponent,
    PermissionsComponent,
  ],
})
export class RolesModule { }
