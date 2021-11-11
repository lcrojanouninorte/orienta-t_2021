import { Component, OnInit, ViewChild } from '@angular/core';
import { SurveyService } from '@core/data/remote/services/survey.service';
import { WebdatarocksComponent } from 'ng-webdatarocks';

@Component({
  selector: 'ngx-cno-occupations-table',
  templateUrl: './cno-occupations-table.component.html',
  styleUrls: ['./cno-occupations-table.component.scss']
})
export class CnoOccupationsTableComponent  {

  @ViewChild('pivot1') child: WebdatarocksComponent;
  loading: boolean;
  tableData: [];
  constructor(    private _surveyService: SurveyService,
    ) {

  }
  getTable(tableName) {
    this.loading = true;
    this._surveyService.getTableData(tableName).subscribe({
      next: (tableData: any) => {
        this.tableData = tableData;
        this.loading = false;
      },
    });
  }

  onPivotReady(pivot: WebDataRocks.Pivot): void {
    console.log('[ready] WebdatarocksPivotModule', this.child);

  }

  onCustomizeCell(
    cell: WebDataRocks.CellBuilder,
    data: WebDataRocks.CellData
  ): void {
    if (data.isClassicTotalRow) {
      cell.addClass('fm-total-classic-r');
    }
    if (data.isGrandTotalRow) {
      cell.addClass('fm-grand-total-r');
    }
    if (data.isGrandTotalColumn) {
      cell.addClass('fm-grand-total-c');
    }
  }

  onReportComplete(): void {
    //Get Data from API
    this.loading = true;
    this._surveyService.getTableData("occupations").subscribe({
      next: (tableData: any) => {
        this.tableData = tableData;
        this.loading = false;

        this.child.webDataRocks.off('reportcomplete');
         this.child.webDataRocks.setReport({
          dataSource: {
            data:  this.tableData,
          },
          "slice": {
            "rows": [{
              "uniqueName": "code",
              "sort": "unsorted"
          },
          {
              "uniqueName": "title",
              "sort": "unsorted"
          },
          {
              "uniqueName": "desc",
              "sort": "unsorted"
          },
          {
              "uniqueName": "cno_onet_id",
              "sort": "unsorted"
          },

      ],
      "flatOrder": [
          "code",
          "title",
          "desc",
          "cno_onet_id",

      ]
          },
          "options": {
            "grid": {
                "type": "flat",
                "showTotals": "off",
                "showGrandTotals": "off"
            }
          },
          "formats": [{
            "name": "",
            "thousandsSeparator": " ",
            "decimalSeparator": ".",
            "decimalPlaces": 0,
            "maxSymbols": 20,
            "currencySymbol": "",
            "currencySymbolAlign": "left",
            "nullValue": " ",
            "infinityValue": "Infinity",
            "divideByZeroValue": "Infinity"
          }],
          localization :"https://drive.google.com/u/1/uc?id=1NVjvurenDPrYeI1MGfDEE25BLy-IZlnY&export=download"
        })

      },
    });

  }
}
