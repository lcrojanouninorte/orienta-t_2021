import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngx-obs-map',
  templateUrl: './obs-map.component.html',
  styleUrls: ['./obs-map.component.scss'],
})
export class ObsMapComponent implements OnInit {
  @Input() gl_map: any;
  date: any;
  constructor(

  ) { }
  ngOnInit(): void {
  }
  getDate() {
   return new Date().toISOString();
  }

  getMapImg() {
    const imgCanvas = this.gl_map.getCanvas().toDataURL('image/PNG');
  }
}
