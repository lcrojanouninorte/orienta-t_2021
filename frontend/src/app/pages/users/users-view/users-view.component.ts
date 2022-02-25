import { Component, OnDestroy } from '@angular/core';
import {  User } from '../../../@core/data/remote/schemas/users';
import { NbAccessChecker } from '@nebular/security';
import { NbDialogService } from '@nebular/theme';
import { UsersEditComponent } from '../users-edit/users-edit.component';
import { UserService } from '../../../@core/data/remote/services/users.service';
import { Role } from 'app/@core/data/remote/schemas/role.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'ngx-users-view',
  templateUrl: './users-view.component.html',
  styleUrls: ['./users-view.component.scss'],
})

export class UsersViewComponent implements OnDestroy {
  private alive = true;
  public users: any = {"General":[], "Admin":[], "Staff":[]};
  public roles: Array<Role> = new Array<Role>();

  contacts: any[];
  recent: any[];

  constructor(
    private _userService: UserService,
    public _accessChecker: NbAccessChecker,
    private _dialogService: NbDialogService,
    private _router: Router) {

       const data = this._userService.getUsersByRole().subscribe(roles => {
        this.roles = roles;

      },
    );
  }

  editUser(id: number) {
    const user = this._router.navigate(['/', { id: id }]);
  }
  deleteUser(user: User, i) {
    //swal
    Swal.fire({
      title: 'Desea borrar al usuario ' + user.email,
      text: "Esta acción no se podrá revertir.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Borrar'
    }).then((result) => {
      if (result.isConfirmed) {
        this._userService.deleteUser(user.id).subscribe({
          next: (data: any) => {
            console.log(data);
            //Find email in each role
            if(data["success"] ){
              Swal.fire(
                'Borrado!',
                'El usuario se ha eliminado correcatemente',
                'success'
              )
              window.location.reload();

            }else{
              this._userService.showToast('top rigth', 'danger', "No fue posible eliminar al usuario");

            }
          },
          error: (error => {
            this._userService.showToast('top rigth', 'danger', error.message);

          }),
        });


      }
    })
    //delt


  }

  countObj(obj) {
    if (obj) {

      const count = obj.reduce((r, a ) => Object.values(a).some(v => v) ? ++r : r, 0);
      return count ;
    } else {
      return 0;
    }
  }
  openUserDialog(user?: User) {
    if (user) {
      this._dialogService.open(UsersEditComponent, {context:  user.id.toString()});
    } else {
      this._dialogService.open(UsersEditComponent);
    }
      // .onClose.subscribe(name => name && this.names.push(name));
  }

  ngOnDestroy() {
    this.alive = false;
  }
  trackByMethod(index: number, el: any): number {
    return el.id;
  }



  placeholders = {"Admin":[], "General":[], "Staff":[]};
  pageSize = 5;

  pageToLoadNext = 1;
  pageToLoadNext2 = 1;
  pageToLoadNext3 = 1;

  loading = false;
  loading2 = false;
  loading3 = false;

  loadGeneral() {
    if (this.loading) { return }

    this.loading = true;
    this.placeholders["General"] = new Array(this.pageSize);
    this._userService.load(this.pageToLoadNext, this.pageSize, "General")
      .subscribe(users_data => {
        if(users_data.length>0){

          this.placeholders["General"] = [];
          this.users["General"].push(...users_data);
          this.loading = false;
          this.pageToLoadNext++;
        }
      });
  }
  loadAdmin() {
    if (this.loading2) { return }

    this.loading2 = true;
    this.placeholders["Admin"] = new Array(this.pageSize);
    this._userService.load(this.pageToLoadNext2, this.pageSize, "Admin")
      .subscribe(users_data => {
        if(users_data.length>0){

          this.placeholders["Admin"] = [];
          this.users[ "Admin"].push(...users_data);
          this.loading2 = false;
          this.pageToLoadNext2++;
        }
      });
  }
  loadStaff() {
    if (this.loading3) { return }

    this.loading3 = true;
    this.placeholders["Staff"] = new Array(this.pageSize);
    this._userService.load(this.pageToLoadNext3, this.pageSize, "Staff")
      .subscribe(users_data => {
        if(users_data.length>0){

          this.placeholders["Staff"] = [];
          this.users[ "Staff"].push(...users_data);
          this.loading3 = false;
          this.pageToLoadNext3++;
        }
      });
  }

}
