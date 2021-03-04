import { LocalDataSource, Ng2SmartTableComponent } from 'ng2-smart-table';
import { RoleService } from '../../../@core/data/remote/services/role.service';
import { Role } from '../../../@core/data/remote/schemas/role.model';
import { CustomRenderRowComponent } from '../custom-render-row/custom-render-row.component';
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'ngx-roles-view',
  templateUrl: './roles-view.component.html',
  styleUrls: ['./roles-view.component.scss'],
})

export class RolesViewComponent  implements AfterViewInit {
  @ViewChild('table')
  smartTable: Ng2SmartTableComponent;

  settings = {
    actions: {
      columnTitle: 'Acciones',
      add: true,
      edit: true,
      position: 'right',
      delete: true,

    },
    hideSubHeader: false,
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
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
        type: 'custom',
        renderComponent: CustomRenderRowComponent,
        onComponentInitFunction: (instance) => {
          instance.linkUrl = '';
        },
      },
      last_update: {
        title: 'Última Actualización',
        type: 'string',
        filter: false,
        editable: false,
      },
      permissions_count: {
        title: 'Permisos',
        type: 'number',
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
  public roles: Array<Role> = new Array<Role>();

  constructor(private service: RoleService,
    private _router: Router,
    private _toastrService: NbToastrService ) {
    const data = this.service.getAll().subscribe(roles => {
        this.roles = roles;
        this.source.load(roles);
      },
    );

    // console.log(data);
  }
  ngAfterViewInit(): void {
   // console.log('Values on ngAfterViewInit():');
    this.smartTable.edit.subscribe( (dataObject: any) => {
      this._router.navigateByUrl('/pages/roles/' + dataObject.data.id);
    });

    this.smartTable.create.subscribe( (dataObject: any) => {
      this._router.navigateByUrl('/pages/roles/add');
    });
    this.smartTable.delete.subscribe( (dataObject: any) => {
      this.onDeleteConfirm(dataObject);
    });

  }
  actions(instance, path) {
    instance.url = path;
  }

  onDeleteConfirm(event): void {

    if (window.confirm('Seguro que desea borrar?  ')) {
      this.service.deleteRole(event.data.id)
      .subscribe({
        next: (result) => {
          if (result) {
            this.showToast('top-right', 'success', 'Borrado Correctamente');
            // Delete item from array
            const index = this.roles.indexOf(event.data);
            // console.log(index);
            this.roles.splice(index, 1);
            this.source = new LocalDataSource(this.roles);
            event.confirm.resolve();
          } else {
            this.showToast('top-right', 'danger', 'Error al borrar');

            event.confirm.reject();
          }

        },
        error: (err: any) => {
          this.showToast('top-right', 'danger', 'Error al borrar');

          event.confirm.reject();
        },
        complete: () => {
        //  console.log('complete');
        },
      });
    } else {
      event.confirm.reject();
    }
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
