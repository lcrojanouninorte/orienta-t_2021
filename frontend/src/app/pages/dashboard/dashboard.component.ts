import { Component } from '@angular/core';
import { User } from '../../@core/data/remote/schemas/users';
import { AuthService } from '../../@core/data/remote/services/auth.service';

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  public user:  User = null;
  constructor(_authService: AuthService) {
   _authService.getCurrentUser().subscribe(
     (user) => this.user = user,
   );
  }
}
