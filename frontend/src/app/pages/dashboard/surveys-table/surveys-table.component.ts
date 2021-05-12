import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Survey } from '@core/data/remote/schemas/survey';
import { User } from '@core/data/remote/schemas/users';
import { SurveyService } from '@core/data/remote/services/survey.service';
import { NbAccessChecker } from '@nebular/security';

@Component({
  selector: 'ngx-surveys-table',
  templateUrl: './surveys-table.component.html',
  styleUrls: ['./surveys-table.component.scss']
})
export class SurveysTableComponent implements OnInit {
  loading: boolean;
  @Input() user: User;
  @Input() surveys:  Array<Survey>;
  @Input() title: string;

  //surveys: Array<Survey>;
  filterargs = {name: 'luis'};
  filterName = "";
  filterId = "";
  constructor(
    private _Activatedroute:ActivatedRoute,
    private _surveyService: SurveyService,
    public _accessChecker: NbAccessChecker,
    private _router: Router ,
  ) { }

  ngOnInit(): void {
    //this.getSurveys();
  }

  view_survey(survey: Survey){
    this._router.navigate(["encuesta",  1,this.user.id,survey.uuid]);

  }

  delete_survey(survey,i ){
    this._surveyService.deleteSurvey(survey).subscribe({
      next: (surveyed: Survey) => {
        this.surveys.splice(i,1);
        this._surveyService.showToast("rigth", "success", "Borrado Correctamente")
      }
    });
  }
}
