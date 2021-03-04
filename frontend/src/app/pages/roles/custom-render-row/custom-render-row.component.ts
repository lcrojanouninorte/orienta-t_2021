import { Input, Component, OnInit } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';

@Component({
    template:  `
    <a  size="small" shape="round" [routerLink]="[url]" outline  nbButton status="success" >{{ linkText }}</a>

  `,
  })
  export class CustomRenderRowComponent implements ViewCell, OnInit {
    public linkText: string;
    public id: number;
    public url: string;

    @Input()
    public value: string;

    @Input()
    public  linkUrl: string;

    @Input()
    public rowData: any;

    ngOnInit() {
      this.linkText = this.value;
      this.id = this.rowData.id;
      this.url =  this.id + this.linkUrl;
    }
  }
