import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Population } from '@core/data/remote/schemas/population';
import { User } from '@core/data/remote/schemas/users';
import { AuthService } from '@core/data/remote/services/auth.service';
import { SurveyService } from '@core/data/remote/services/survey.service';
import { NbDialogService } from '@nebular/theme';
import { environment } from 'environments/environment';

import { PopulationAddComponent } from '../population-add/population-add.component';


@Component({
  selector: 'ngx-populations-list',
  templateUrl: './populations-list.component.html',
  styleUrls: ['./populations-list.component.scss']
})
export class PopulationsListComponent implements OnInit {
  public user:  User = null;
  populations: Population[];
  active_population: Population = null;
  environment = environment;
  @Output() onActivate: EventEmitter<Population[]> = new EventEmitter<Population[]>();
  constructor(
    private _dialogService: NbDialogService,
    private _surveyService: SurveyService,
    _authService: AuthService,

  ) {
    _authService.getCurrentUser().subscribe(
      (user) => this.user = user,
    );
  }

  ngOnInit(): void {
    this.getPopulations();
  }
  addPopulation(user?: User) {
    if (user) {
      this._dialogService.open(PopulationAddComponent, {context:  user.id.toString()});
    } else {
      this._dialogService.open(PopulationAddComponent)
      .onClose.subscribe(population => {
        if(population){

          this.populations = [population].concat( this.populations) }
        }

        )
    }
      // .onClose.subscribe(name => name && this.names.push(name));
  }

  getPopulations(){
    this._surveyService.getPopulations().subscribe({
      next: (populations: Array<Population>) => {
        this.populations = populations;
        this.populations.map((pop:Population)=>{
            if(pop.active){
              this.active_population = pop;
            }
        })
      }
    });
  }

  deletePopulation(pop: Population, i: number){
    this._surveyService.delPopulations(pop).subscribe({
      next: (populations: Array<Population>) => {
        if(populations){
          this.populations.splice(i,1);
        }

      }
    });

  }

  activatePopulation(pop, i){
    this._surveyService.activePopulations(pop).subscribe({
      next: (populations: Array<Population>) => {
        if(populations){
          this.populations = populations;
          this.onActivate.emit(populations);

          //emit change
        }

      }
    });

  }
}
