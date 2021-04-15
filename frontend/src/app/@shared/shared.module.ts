import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbAutocompleteModule, NbInputModule, NbCardModule, NbSelectModule, } from '@nebular/theme';
import { ObsMapComponent } from './pdf-templates/obs-map/obs-map.component';
import { SurveysFilterPipe } from './pipes/surveys-filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    NbAutocompleteModule,
    NbInputModule,
    NbCardModule,
    NbSelectModule,

  ],
  declarations: [  ObsMapComponent, SurveysFilterPipe ],
  exports:      [ ObsMapComponent,
                 CommonModule,SurveysFilterPipe ]
})
export class SharedModule { }
