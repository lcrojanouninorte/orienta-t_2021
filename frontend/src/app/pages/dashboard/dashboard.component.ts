import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { Population } from '@core/data/remote/schemas/population';
import { SurveyService } from '@core/data/remote/services/survey.service';
import { NbDialogService } from '@nebular/theme';
import { User } from '../../@core/data/remote/schemas/users';
import { AuthService } from '../../@core/data/remote/services/auth.service';
import { PopulationAddComponent } from './population-add/population-add.component';
import { Clipboard } from '@angular/cdk/clipboard'
import { NbAccessChecker } from '@nebular/security';

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
})

export class DashboardComponent {
  public user:  User = null;
  populations: Population[];
  origin: string = window.location.origin;
  active_population: Population = null;
  loading: boolean;
  surveys: any;
  surveys_all: any;

  constructor(
    private clipboard: Clipboard,
    public _accessChecker: NbAccessChecker,

    private _authService: AuthService,
    private _surveyService: SurveyService,
    ) {
   _authService.getCurrentUser().subscribe(
     (user) => {
       this.user = user;
        this.getActivePopulations();
        this.getSurveys();
        if(_accessChecker.isGranted('Register Admin', 'all')){
          this.getSurveys_all();
        }
  }
   );

  }
  @ViewChild('link')  link_container: ElementRef;
  getActivePopulations(){
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
  getSurveys(){

    this.loading = true;
    this._surveyService.getSurveys(this.user.id+"").subscribe({
      next: (surveys: any) => {
        this.surveys = surveys;
        this.loading = false;


       },
    })
  }
  getSurveys_all(){

    this.loading = true;
    this._surveyService.getSurveys("all").subscribe({
      next: (surveys_all: any) => {
        this.surveys_all = surveys_all;
        this.loading = false;


       },
    })
  }
  onActivate($event){
    this.getActivePopulations();
    this.getSurveys();
    if(this._accessChecker.isGranted('Register Admin', 'all')){
      this.getSurveys_all();
    }
  }


  copyToClipBoard(){
    this.clipboard.copy(this.origin+'/#/encuesta/'+this.active_population.id+'/'+this.user.id);
    alert(`Enlace copiado`)

  }
}
