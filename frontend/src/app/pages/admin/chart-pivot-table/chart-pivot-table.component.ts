import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { SurveyService } from '@core/data/remote/services/survey.service';
import { WebdatarocksComponent } from 'ng-webdatarocks';
import * as Highcharts from 'highcharts';
import "webdatarocks/webdatarocks.highcharts.js";

@Component({
  selector: 'ngx-chart-pivot-table',
  templateUrl: './chart-pivot-table.component.html',
  styleUrls: ['./chart-pivot-table.component.scss']
})
export class ChartPivotTableComponent implements OnInit    {

  @ViewChild('pivot1') child: WebdatarocksComponent;
  Highcharts: typeof Highcharts = Highcharts;

  @Input() tableName: string;
  loading: boolean;
  tableData: [];

  firstLoad = true;

  ngOnInit(){

  }

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
    if(this.firstLoad){
      this._surveyService.getTableData(this.tableName).subscribe({
        next: (tableData: any) => {
          this.tableData = tableData;
          this.loading = false;


          this.child.webDataRocks.setReport({
            dataSource: {
              data:  this.tableData,
            },
            "slice": {
              "reportFilters": [
                  {
                      "uniqueName": "created_at.Year"
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
                      "uniqueName": "estrato",
                      "sort": "unsorted"
                  },
                  {
                      "uniqueName": "sector",
                      "sort": "unsorted"
                  },
                  {
                      "uniqueName": "municipio",
                      "sort": "unsorted"
                  },
                  {
                      "uniqueName": "created_at.Month"
                  },
                  {
                      "uniqueName": "dpto",
                      "sort": "unsorted"
                  }
              ],
              "rows": [
                  {
                      "uniqueName": "institucion",
                      "sort": "unsorted"
                  }
              ],
              "columns": [
                  {
                      "uniqueName": "Measures"
                  }
              ],
              "measures": [
                  {
                      "uniqueName": "id",
                      "aggregation": "count"
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
          "formats": [
              {
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
              }
          ]
          })
          this.firstLoad = false;

        }

      });
    }else{
      this.createAreaChart();
      this.createBarChart();
    }


  }

  customizeToolbar(toolbar) {
    var tabs = toolbar.getTabs(); // get all tabs from the toolbar
    toolbar.getTabs = function() {
      delete tabs[0]; // delete the first tab
      delete tabs[1]; // delete the first tab
      delete tabs[2]; // delete the first tab
        return tabs;
    }
  }
  //CHART:
  createAreaChart() {
    this.child.webDataRocks.highcharts.getData(
      {
        type: "areaspline"
      },
      data => {
        this.Highcharts.setOptions({
          plotOptions: {
            series: {
              color: "#2a8000" // set colors of the series
            }
          }
        });
        this.Highcharts.chart("highchartsContainer-1", data);
      },
      data => {
        this.Highcharts.setOptions({
          plotOptions: {
            series: {
              color: "#2a8000" // set colors of the series
            }
          }
        });
        this.Highcharts.chart("highchartsContainer-1", data);
      }
    );
  }
  /* Create a bar chart that shows a preconfigured slice */
  createBarChart() {
    this.child.webDataRocks.highcharts.getData(
      {

        type: "bar"
      },
      data => {
        this.Highcharts.setOptions({
          plotOptions: {
            series: {
              color: "#00a3cc" // set colors of the series
            }
          }
        });
        this.Highcharts.chart("highchartsContainer-2", data);
      },
      data => {
        this.Highcharts.setOptions({
          plotOptions: {
            series: {
              color: "#00a3cc" // set colors of the series
            }
          }
        });
        this.Highcharts.chart("highchartsContainer-2", data);
      }
    );
  }

}
