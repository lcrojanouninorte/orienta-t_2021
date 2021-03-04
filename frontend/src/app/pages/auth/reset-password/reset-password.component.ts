import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NbResetPasswordComponent, NbAuthService } from '@nebular/auth';
import { CdkAriaLive } from '@angular/cdk/a11y';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ngx-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent extends NbResetPasswordComponent {

}
