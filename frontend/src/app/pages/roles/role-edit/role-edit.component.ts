import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, forkJoin, combineLatest, timer, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Role } from '../../../@core/data/remote/schemas/role.model';
import { RoleService } from '../../../@core/data/remote/services/role.service';
import { FormBuilder, FormArray } from '@angular/forms';
import { Validators } from '@angular/forms';
import { NbToastrService } from '@nebular/theme';
import { Permission } from 'app/@core/data/remote/schemas/permission.model';

@Component({
  selector: 'ngx-role-edit',
  styleUrls: ['./role-edit.component.scss'],
  templateUrl: './role-edit.component.html',
})
export class RoleEditComponent {
  public role$: Observable<Role>;
  public role: Role = new Role;
  public systemPermissions$: Observable<Permission[]>;
  public systemPermission: Permission[];
  public selectedId: any;
  public form = this.fb.group({
    id: [''],
    last_update: [''],
    name: ['', Validators.required],
    description: [''],
    permissions: new FormArray([
    ]),
  });
  public apis: Array<Observable<any>>;
  constructor(private route: ActivatedRoute,
    private service: RoleService,
    private fb: FormBuilder,
    private toastrService: NbToastrService) {

    this.role$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = (params.get('id'));
        if (this.selectedId === 'add') {
          return of(new Role([]));
        } else {
          return this.service.getSingle(this.selectedId as number);
        }
      }),
    );
    this.systemPermissions$ = this.service.getSystemPermissions();
    combineLatest([
      this.systemPermissions$,
      this.role$,
    ]).subscribe({
        next: ([sysPerms, roles ]) => {
          this.role = roles;
          this.systemPermission = sysPerms;
          this.form = this.fb.group({
            id: [this.role.id],
            update_at: [this.role.update_at],
            name: [this.role.name, Validators.required],
            description: [this.role.description],
            permissions: this.buildPermissions(),
          });
        },
        error: (err: any) => {
          this.showToast('top-right', 'danger', err);
        },
        complete: () => {
        },
      });
 }

  save(): void {
    if ( this.form.get('id').value !== '' ) {
      this.role.name = this.form.get('name').value;
      this.role.description = this.form.get('description').value;
      this.role$ = this.service.updateRole(this.role);
    } else {
      this.role.id = '';
      this.role.name = this.form.get('name').value;
      this.role.description = this.form.get('description').value;
      this.role$ = this.service.addRole(this.role);
    }
    this.role$.subscribe({
      next: (result) => {
        if (result) {
          this.showToast('top-right', 'success', 'Guardado Correctamente');
        } else {
          this.showToast('top-right', 'danger', 'Error al guardar');
        }

      },
      error: (err: any) => {
        this.showToast('top-right', 'success', err);
      },
      complete: () => {
      //  console.log('complete');
      },
    });
  }

  delete(role: Role): void {
    // this.roles = this.roles.filter(h => h !== role);
    this.service.deleteRole(role).subscribe();
  }

  trackByMethod(index: number, el: any): number {
    return el.id;
  }

  buildPermissions() {
    // Check true or false, to system permissión, based on role asigned permission.
    let i: number = 0;
    let found: boolean = false;
    const permChecklist: Array<boolean> = [];
    this.systemPermission.map((sysPerm: Permission) => {
      this.role.permissions.map((perm: Permission) => {
        if (perm.name === sysPerm.name) {
          found = true;
          return;
        }
      });
      permChecklist[i] = found;
      found = false;
      i++;
    });
    return this.fb.array(permChecklist);
  }

  onCheckboxChange(e , i: number ) {
    if (e.target.checked) {
      this.role.permissions.push(this.systemPermission[i]);
      this.systemPermission[i].active = true;
    } else {
      let j: number = 0;
      this.role.permissions.forEach((perm: Permission) => {
        if (perm.name === this.systemPermission[i].name) {
          this.role.permissions.splice(j, 1);
          this.systemPermission[i].active = false;
          return;
        }
        j++;
      });
    }
  }

  private index: number = 0;
  showToast(position, status, msj) {
    this.index += 1;
    this.toastrService.show(
        msj,
      `Información`,
      {limit: 3, position, status });
  }
}
