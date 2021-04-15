import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Population } from '@core/data/remote/schemas/population';
import { Surveyed } from '@core/data/remote/schemas/surveyed';
import { AuthService } from '@core/data/remote/services/auth.service';
import { SurveyService } from '@core/data/remote/services/survey.service';
import { NbDialogService } from '@nebular/theme';

@Component({
  selector: 'ngx-population-view',
  templateUrl: './population-view.component.html',
  styleUrls: ['./population-view.component.scss']
})
export class PopulationViewComponent implements OnInit {
  populations: Population[];
  population_id: string;
  population: Population;

  constructor( _authService: AuthService,
    private _surveyService: SurveyService,
    private _dialogService: NbDialogService,
    private _Activatedroute:ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.population_id = this._Activatedroute.snapshot.paramMap.get("population_id");

    this.getPopulations(this.population_id);
  }
  getPopulations(pop_id){
    this._surveyService.getPopulation(pop_id).subscribe({
      next: (population: Population) => {
        this.population = population;
      }
    });
  }

  deleteSurveyed(surveyed,i ){
    this._surveyService.deleteSurveyed(surveyed).subscribe({
      next: (surveyed: Surveyed) => {
        this.population.surveyeds.slice(i,1);
        this._surveyService.showToast("rigth", "success", "Borrado Correctamente")
      }
    });
  }

   onAdded(ev: Surveyed){
     const s   = [ev].concat(this.population.surveyeds);
     this.population.surveyeds  = s ;
     this._surveyService.showToast("rigth", "success", "Agregado Correctamente")

  }



}
