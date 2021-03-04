import { Component, OnInit, ViewChild } from '@angular/core';
import { Ng2SmartTableComponent, LocalDataSource } from 'ng2-smart-table';
import { Permission } from 'app/@core/data/remote/schemas/permission.model';
import { RoleService } from 'app/@core/data/remote/services/role.service';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { CustomRenderRowComponent } from '../custom-render-row/custom-render-row.component';
import { CustomRenderRowButtonsComponent } from '../custom-render-row/custom-render-row-buttons.component';

@Component({
  selector: 'ngx-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.scss'],
})
export class PermissionsComponent  {
  @ViewChild('table')
  smartTable: Ng2SmartTableComponent;

  settings = {
    actions: {
      columnTitle: 'Acciones',
      add: false,
      edit: false,
      position: 'right',
      delete: false,
    },
    hideSubHeader: false,
    mode: 'external',
    columns: {
      id: {
        title: 'ID',
        type: 'number',
        filter: false,
        editable: false,
      },
      name: {
        title: 'Nombre',
        type: 'text',
      },
      roles: {
        title: 'Roles',
        type: 'custom',
        renderComponent: CustomRenderRowButtonsComponent,
        onComponentInitFunction: (instance) => {
          instance.items = '/roles';
        },
        filter: false,
        editable: false,
      },
      users_count: {
        title: 'Usuarios',
        type: 'custom',
        renderComponent: CustomRenderRowComponent,
        onComponentInitFunction: (instance) => {
          instance.linkUrl = '/users';
        },
        filter: false,
        editable: false,
      },

    },
  };
  source: LocalDataSource = new LocalDataSource();
  public permissions: Array<Permission> = new Array<Permission>();

  constructor(private service: RoleService, private _router: Router,  private _toastrService: NbToastrService ) {
    const data = this.service.getSystemPermissions().subscribe(permissions => {
        this.permissions = permissions;
        this.source.load(permissions);
      },
    );

    // console.log(data);
  }

  actions(instance, path) {
    instance.url = path;
  }

  private index: number = 0;
  showToast(position, status, msj) {
    this.index += 1;
    this._toastrService.show(
        msj,
      `Información`,
      {limit: 3, position, status });
  }
}
