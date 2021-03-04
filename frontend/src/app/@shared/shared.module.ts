import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbAutocompleteModule, NbInputModule, NbCardModule, NbSelectModule, } from '@nebular/theme';
import { ObsMapComponent } from './pdf-templates/obs-map/obs-map.component';

@NgModule({
  imports: [
    CommonModule,
    NbAutocompleteModule,
    NbInputModule, 
    NbCardModule,
    NbSelectModule,
    
  ],
  declarations: [  ObsMapComponent ],
  exports:      [ ObsMapComponent,
                 CommonModule ]
})
export class SharedModule { }
