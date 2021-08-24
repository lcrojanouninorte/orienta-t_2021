import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Level } from '@core/data/remote/schemas/level';
import { Occupation } from '@core/data/remote/schemas/occupation';
import { SurveyService } from '@core/data/remote/services/survey.service';
import { NbAccessChecker } from '@nebular/security';
import { NbLayoutScrollService } from '@nebular/theme';

@Component({
  selector: 'ngx-ocupaciones',
  templateUrl: './ocupaciones.component.html',
  styleUrls: ['./ocupaciones.component.scss']
})
export class OcupacionesComponent implements OnInit {
  onet_title: string;
  pps_code: string;
  loading: boolean;
  occupations: Occupation[];
  levels: any[];

  constructor(
    private _Activatedroute: ActivatedRoute,
    private _surveyService: SurveyService,
    public _accessChecker: NbAccessChecker,
    private _ly: NbLayoutScrollService,
    private _router: Router,
  ) {
    this.onet_title = this._Activatedroute.snapshot.paramMap.get("onet_title");
    this.pps_code = this._Activatedroute.snapshot.paramMap.get("pps_code");
    if(this.onet_title == null){
      //Mostar error
    }
    this.getOccupationsBylevel(this.onet_title,this.pps_code);
  }
  getOccupationsBylevel(onet_title: string, pps_code: string) {
    this.loading = true;
    this._surveyService.getOccupationsBylevel(pps_code,onet_title).subscribe({
      next: (levels : Level[] ) => {
        this.levels = levels;
        this.loading = false;
      },
    });
  }

  ngOnInit(): void {
  }

}
