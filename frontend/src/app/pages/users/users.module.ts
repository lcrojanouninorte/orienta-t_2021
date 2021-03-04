import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import {
  NbCardModule,
  NbButtonModule,
  NbActionsModule,
  NbIconModule,
  NbTooltipModule,
  NbListModule,
  NbStepperModule,
  NbInputModule,
  NbUserModule,
  NbCheckboxModule,
  NbRadioModule,
  NbFormFieldComponent,
  NbFormFieldModule,
  NbSelectModule,
  NbDialogModule,
  NbSpinnerModule,
  NbProgressBarModule} from '@nebular/theme';
import { UsersViewComponent } from './users-view/users-view.component';
import { UsersEditComponent } from './users-edit/users-edit.component';
import { UsersAddFormComponent } from './users-add-form/users-add-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GravatarModule } from 'ngx-gravatar';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { AddPeopleComponent } from './people/add-people/add-people.component';

@NgModule({
  declarations: [
    UsersComponent,
    UsersViewComponent,
    UsersEditComponent,
    UsersAddFormComponent,
    AddPeopleComponent,
  ],
  imports: [
    CommonModule,
    NbCardModule,
    UsersRoutingModule,
    NbButtonModule,
    NbActionsModule,
    NbIconModule,
    NbTooltipModule,
    NbListModule,
    NbStepperModule,
    NbInputModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbFormFieldModule,
    ReactiveFormsModule,
    GravatarModule,
    NgxDropzoneModule,
    NbSelectModule,
    NbDialogModule.forChild(),
    NbSpinnerModule,
    NbProgressBarModule,

  ],
})
export class UsersModule { }
