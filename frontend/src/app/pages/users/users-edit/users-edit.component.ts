import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbToastrService } from '@nebular/theme';
import { User } from 'app/@core/data/remote/schemas/users';
import { Profile } from '../../../@core/data/remote/schemas/profile.model';
import { RoleService } from 'app/@core/data/remote/services/role.service';
import { Role } from 'app/@core/data/remote/schemas/role.model';
import { Observable, combineLatest, of } from 'rxjs';
import { UserService } from '../../../@core/data/remote/services/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Location } from '@angular/common';
import { HttpEventType } from '@angular/common/http';
import { J } from '@angular/cdk/keycodes';
import { NbStepperComponent } from '@nebular/theme';

@Component({
  selector: 'ngx-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.scss'],
})

export class UsersEditComponent {

  public base_roles = [
    { value: 'Admin', label: 'Administrador', disabled: false },
    { value: 'Staff', label: 'Staff', disabled: false },
   { value: 'General', label: 'General/Estudiante', disabled: false },
  ];
  public roles: Array<Role> = new Array<Role>();
  public roles$: Observable<Role[]>;
  public user: User = new User;
  public profile: Profile = new Profile;
  public form1: FormGroup;
  public form2: FormGroup;
  public form3: FormGroup;
  public form4: FormGroup;
  public loading = false;
  public selectedId: any;
  public user$: Observable<User>;
  @ViewChild('stepper') stepper: NbStepperComponent;

  // File Upload
  public files: Array<File> = [];
  progress: number;
  constructor(

    private _fb: FormBuilder,
    private _toastrService: NbToastrService,
    private _rService: RoleService,
    private _uService: UserService,
    private _route: ActivatedRoute,
    private _location: Location) {

    // load user if param
    this.user$ = this._route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = (params.get('id'));
        if (this.selectedId === 'add') {
          return  of(new User() );
        } else {
          return this._uService.getSingle(this.selectedId as number);
        }
      }),
    );

    this.roles$ = this._rService.getAll();

    combineLatest([
      this.user$,
      this.roles$,
    ]).subscribe({
        next: ([user, roles ]) => {
          this.roles = roles;
          this.user = user as User;
          this.user.email = user.email === 'Visitante'? '' : user.email;
          this.profile = Object.assign( this.profile, user.profile) ;
          this.form1 = _fb.group({
            base_role: [user.base_role, Validators.required],
            roles_name: [user.roles_names, Validators.required],
          });

          this.form2 = _fb.group({
            email: [user.email || '',  Validators.min(5)],
            password: [''],
            password_confirmation: [''],
            first_name: [user.profile?.first_name, Validators.required],
            last_name: [user.profile?.last_name, Validators.required],
          });
          this.form3 = _fb.group({
            avatar: [user.profile?.avatar, Validators.required],
          });
          this.form4 = _fb.group({
              configs: _fb.group({
                send_mail : [true, Validators.required],
              }),
          });

        },
        error: (err: any) => {
          this._uService.showToast('top-right', 'danger', err);
        },
        complete: () => {
        },
      });

   /* this.roles$.subscribe({
      next: (roles) => {
        this.roles = roles;
        // this.form.get('roles').setValue(roles);
      },
      error: (err: any) => {
        this.showToast('top-right', 'danger', err);
      },
      complete: () => {
      },
    });*/

    // this.user.profile = this.profile;
  }
  // forms events

  on1Submit() {
    this.form1.markAsDirty();
  }
  on2Submit() {
    this.form2.markAsDirty();
  }
  resetAll() {
    this.stepper.next();
    this.form1.controls.roles_name.setValue([]);
    this.form1.controls.base_role.setValue('');
    this.form2.reset();
    this.form3.reset();
    this.form4.reset();
    this.profile = {};
    this.user = {};
    this.files = [];

  }
  on4Submit() {
    this.form4.markAsDirty();
    this.loading = true;

    this.user.base_role = this.form1.get('base_role').value;
    this.user.roles = this.form1.get('roles_name').value;
    this.user.email = this.form2.get('email').value;
    this.user.password = this.form2.get('password').value;
    this.user.password_confirmation = this.form2.get('password_confirmation').value;
    this.profile.first_name = this.form2.get('first_name').value;
    this.profile.last_name = this.form2.get('last_name').value;
    this.profile.configs = this.form4.get('configs').value;
    this.user.profile = this.profile;

    const formData = this._uService.toFormData(this.user);
    formData.append('profile', JSON.stringify(this.user.profile ));

    if (this.files.length > 0) {
        formData.append('file', this.files[0]);
    }
    // console.log( this.user);
    this._uService.addUser(formData).subscribe({
      next: (event) => {
        if ( event.type === HttpEventType.UploadProgress ) {
          this.progress = Math.round((100 * event.loaded) / event.total);
        }
        if ( event.type === HttpEventType.Response ) {

          this._uService.showToast('top-right', 'success', 'Actualizado correctamente');
          this.resetAll();
          this.loading = false;
          this.progress = 0;
        }
      },
      error: (err: any) => {
        this._uService.showToast('top-right', 'danger', err);
        this.loading = false;
        this.progress = 0;
      },
      complete: () => {
      },
    });
  }

  //   Gravatar:
  fallbacks = ['blank', 'identicon', 'mp', 'monsterid', 'retro', 'robohash', 'wavatar'];

  styleObject = {
    borderWidth: '2px',
    borderColor: 'green',
    borderStyle: 'dashed',
    width: '150px',
    height: '150px',
    borderRadius: '20%',
  };
  onAvatarClick(e) {
    const target = e.target || e.srcElement || e.currentTarget;
    this.profile.avatar = target.attributes.src.value;
  }

  onSelect(event) {
    this.profile.avatar = this.form2.get('email').value;
    // console.log(event);
    this.files.push(...event.addedFiles);
  }

  onRemove(event) {
    // console.log(event);
    this.profile.avatar = '';
    this.files.splice(this.files.indexOf(event), 1);
  }

  hasAvatar() {
    return (this.profile?.avatar && this.files?.length === 0);
  }
  goBack() {
    this._location.back();
  }

}
