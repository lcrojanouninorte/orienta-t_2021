import { Input, Component, OnInit } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';

@Component({
    template:  `
    <div class="row">
      <div *ngFor="let item of items;" class="col-sm-3">
          <a   shape="round" size="small" [routerLink]="['/pages/roles/'+item.id]" outline  nbButton   status="success" >{{ item.name }}</a>
       </div>
    </div>
  `,
  })
  export class CustomRenderRowButtonsComponent implements ViewCell, OnInit {
    public items: Array<any>;

    @Input()
    public rowData: any;

    @Input()
    public value: string | number;

    ngOnInit() {
      this.items = this.rowData.roles;
    }
  }
