import { Component, OnInit } from '@angular/core';
import { SurveyService } from '@core/data/remote/services/survey.service';

@Component({
  selector: 'ngx-tutorials',
  templateUrl: './tutorials.component.html',
  styleUrls: ['./tutorials.component.scss']
})
export class TutorialsComponent implements OnInit {


  tutorials = [
]
  loading: boolean;
  constructor(private _surveyService: SurveyService,) { }

  ngOnInit(): void {
    this.getTable("orientat/tutorials")

  }
  getTable(tableName) {
    this.loading = true;

    this._surveyService.getTableData(tableName).subscribe({
      next: (tableData: any) => {
        this.tutorials = tableData;
        this.loading = false;
      },
    });
  }

}
