import { Component, OnDestroy } from '@angular/core';
import {  User } from '../../../@core/data/remote/schemas/users';
import { NbAccessChecker } from '@nebular/security';
import { NbDialogService } from '@nebular/theme';
import { UsersEditComponent } from '../users-edit/users-edit.component';
import { UserService } from '../../../@core/data/remote/services/users.service';
import { Role } from 'app/@core/data/remote/schemas/role.model';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-users-view',
  templateUrl: './users-view.component.html',
  styleUrls: ['./users-view.component.scss'],
})

export class UsersViewComponent implements OnDestroy {
  private alive = true;
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
  deleteUser(id: number) {

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
}
