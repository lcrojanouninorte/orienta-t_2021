import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-mercado-laboral',
  templateUrl: './mercado-laboral.component.html',
  styleUrls: ['./mercado-laboral.component.scss']
})
export class MercadoLaboralComponent implements OnInit {
  @Input() market:any;
  @Input() title:string;
  @Input() showFooter:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
