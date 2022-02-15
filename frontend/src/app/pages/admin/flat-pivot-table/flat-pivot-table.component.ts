import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { SurveyService } from '@core/data/remote/services/survey.service';
import { WebdatarocksComponent } from 'ng-webdatarocks';

@Component({
  selector: 'ngx-flat-pivot-table',
  templateUrl: './flat-pivot-table.component.html',
  styleUrls: ['./flat-pivot-table.component.scss']
})
export class FlatPivotTableComponent implements OnInit {

  @ViewChild('pivot1') child: WebdatarocksComponent;

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
            "options": {
              grid: {
                type: "flat",
                "showTotals": "off",
                "showGrandTotals": "off"
              }
            },
            "slice": {

              "flatOrder": [
                  "id",
                  "email",
                  "nombre",
                  "p1",
                  "p2",
                  "p3",
                  "estrato",
                  "dpto",
                  "municipio",
                  "institucion",
                  "edad",
                  "grado",
                  "direccion",
                  "telefono",
                  "created_at",
                  "user_id"

              ]
            },

          "formats": [
              {
                  "name": "",
                  "thousandsSeparator": "",
                  "decimalSeparator": ".",

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

    }


  }
  onCellClick(event){
    if(event.label.includes("/#/perfil/areas/")){
      window.open(event.label, "_blank");
    }
    /*alert("Click on cell - row: " + event.rowIndex +
        ", column: " + event.columnIndex +
        ", label: " + event.label);*/
  };
  customizeToolbar(toolbar) {
    var tabs = toolbar.getTabs(); // get all tabs from the toolbar
    toolbar.getTabs = function() {
      delete tabs[0]; // delete the first tab
      delete tabs[1]; // delete the first tab
      delete tabs[2]; // delete the first tab
        return tabs;
    }
  }
}
