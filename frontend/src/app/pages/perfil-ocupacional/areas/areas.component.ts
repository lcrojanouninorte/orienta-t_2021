import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PpsRank } from '@core/data/remote/schemas/pps_rank';
import { SurveyService } from '@core/data/remote/services/survey.service';

@Component({
  selector: 'ngx-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.scss']
})
export class AreasComponent implements OnInit {


  uuid: string;
  loading: boolean;
  ppsRanking: PpsRank[];

  constructor( private _Activatedroute: ActivatedRoute,
    private _surveyService: SurveyService,
  ) { }


  ngOnInit(): void {
    this.uuid = this._Activatedroute.snapshot.paramMap.get("uuid");
    if(this.uuid == null){
      //Mostar error
    }
    this.getPpsRanking(this.uuid);
  }

  getPpsRanking(uuid){
    this.loading = true;
    this._surveyService.getPpsRank(uuid).subscribe({
      next: (ppsRanking : PpsRank[] ) => {
        this.ppsRanking = ppsRanking;
        this.loading = false;

      },
    });
  }



}
