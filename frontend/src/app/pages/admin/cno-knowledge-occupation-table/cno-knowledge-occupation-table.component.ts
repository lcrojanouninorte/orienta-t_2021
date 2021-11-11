import { FlatPivotTableComponent } from './../flat-pivot-table/flat-pivot-table.component';

import { HttpEventType } from '@angular/common/http';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import {  FormGroup } from '@angular/forms';
import { SurveyService } from '@core/data/remote/services/survey.service';
import { NbDialogService } from '@nebular/theme';
import { WebdatarocksComponent } from 'ng-webdatarocks';
import * as WebDataRocks from 'webdatarocks';

@Component({
  selector: 'ngx-cno-knowledge-occupation-table',
  templateUrl: './cno-knowledge-occupation-table.component.html',
  styleUrls: ['./cno-knowledge-occupation-table.component.scss']
})
export class CnoKnowledgeOccupationTableComponent {


  @ViewChild('pivot1') child: WebdatarocksComponent;
  report: WebDataRocks.Report ;
  loading: boolean;
  tableData: [];
  tables=[{
    "name" :"onets",
    "model_name": "onets"
  },
  {
    "name" :"niveles",
    "model_name": "levels"
  },
  {
    "name" :"perfiles",
    "model_name": "perfiles"

  },
  {
    "name" :"conocimientos"
  },
  {
    "name" :"conocimientos"
  },{
    "name" :"conocimientos"
  },{
    "name" :"conocimientos"
  },{
    "name" :"conocimientos"
  },
]
  options = {

    grid: {
      "type": "flat",
      "showTotals": "off",
      "showGrandTotals": "off"
    }

  }
  firstLoad: boolean = true;
  constructor(private _surveyService: SurveyService,
    private dialogService: NbDialogService
  ) {
    this.report = {
      dataSource: {
        data: this.getData(),
      },
      "slice": {
        "rows": [{
          "uniqueName": "Gran Grupo",
          "sort": "unsorted"
        },
        {
          "uniqueName": "Ocupación",
          "sort": "unsorted"
        },
        {
          "uniqueName": "Nombre Conocimiento",
          "sort": "unsorted"
        }

        ],
        "flatOrder": [
          "Gran Grupo",
          "Ocupación",
          "Nombre Conocimiento",
        ]
      },
      "options": {
        grid: {
          type: "flat",
          "showTotals": "off",
          "showGrandTotals": "off"
        }
      }
    }
  }
  getData(): object[] {
    return this.tableData;
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


  onReportChange() {
    console.log('[Report Change] WebdatarocksPivotModule');

  }

  onReportComplete(): void {
    console.log('[Report Complete] WebdatarocksPivotModule');

    //Get Data from API
    this.loading = true;
    if (this.firstLoad) {
      this._surveyService.getTableData("occupations/knowledges").subscribe({
        next: (tableData: any) => {
          this.tableData = tableData;
          this.loading = false;

          // this.child.webDataRocks.off('reportcomplete');
          this.child.webDataRocks.updateData({ data: tableData })
          this.firstLoad = false;
        },
      });

    } else {

    }



  }

  onDataLoaded($event) {
    console.log('[Data Loaded] WebdatarocksPivotModule');
    this.child.webDataRocks.setOptions(this.options);
    this.child.webDataRocks.refresh();

  }


  open(table_name) {
    this.dialogService.open(FlatPivotTableComponent, {
      context: {
        tableName: table_name,
      },
    });
  }


  public progress: number = 0;
  public files: File[] = [];
  public form: FormGroup;

  onSubmit() {
    // Add layer
    const formData = new FormData();
    if (this.files.length > 0) {
      formData.append('file', this.files[0]);
    }
    this.loading = true;
    this._surveyService.setTableData("import_excel",formData)
    .subscribe({
      next: (event => {
        if ( event.type === HttpEventType.UploadProgress ) {
          this.progress = Math.round((100 * event.loaded) / event.total);
        }
        if ( event.type === HttpEventType.Response ) {
          this.form.reset();
          this._surveyService.showToast('top rigth', 'success', 'Persona Agregada correctamente');
          this.loading = false;
          this.progress = 0;

        }
      }),
      error: (error => {
        this._surveyService.showToast('top rigth', 'danger', error.message);
        this.loading = false;
        this.progress = 0;
      }),
    });
  }
 // File selector:

  onSelect(event) {
  this.files.push(...event.addedFiles);
  }
  onRemoveFile(event) {
    this.files.splice(this.files.indexOf(event), 1);
  }

}
