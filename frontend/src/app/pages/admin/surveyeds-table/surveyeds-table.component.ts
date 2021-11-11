import { Component, OnInit, ViewChild } from '@angular/core';
import { SurveyService } from '@core/data/remote/services/survey.service';
import { WebdatarocksComponent } from 'ng-webdatarocks';

@Component({
  selector: 'ngx-surveyeds-table',
  templateUrl: './surveyeds-table.component.html',
  styleUrls: ['./surveyeds-table.component.scss']
})
export class SurveyedsTableComponent  {

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
    this._surveyService.getTableData("surveyeds").subscribe({
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
              "uniqueName": "nombre",
              "sort": "unsorted"
          },
          {
              "uniqueName": "apellido",
              "sort": "unsorted"
          },
          {
              "uniqueName": "estrato",
              "sort": "unsorted"
          },
          {
              "uniqueName": "dpto",
              "sort": "unsorted"
          },
          {
              "uniqueName": "municipio",
              "sort": "unsorted"
          },
          {
              "uniqueName": "institucion",
              "sort": "unsorted"
          },
          {
              "uniqueName": "sector",
              "sort": "unsorted"
          },
          {
              "uniqueName": "edad",
              "sort": "unsorted"
          },
          {
              "uniqueName": "grado",
              "sort": "unsorted"
          },
          {
              "uniqueName": "direccion",
              "sort": "unsorted"
          }
      ],
      "flatOrder": [
          "nombre",
          "apellido",
          "estrato",
          "dpto",
          "municipio",
          "institucion",
          "sector",
          "edad",
          "grado",
          "direccion"
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
            "decimalPlaces": 2,
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
