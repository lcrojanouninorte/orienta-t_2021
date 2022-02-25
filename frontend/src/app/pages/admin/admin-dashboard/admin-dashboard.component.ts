import { filter } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { SurveyService } from '@core/data/remote/services/survey.service';
import { NbCalendarRange, NbDateService, NbTagComponent, NbThemeService } from '@nebular/theme';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'ngx-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  loading: boolean;
  tableData: any;
  formControl = new FormControl(new Date());
  date = new Date();

  range: NbCalendarRange<Date>;
  filters_list: Array<any> = new Array();

  get monthStart(): Date {
    return this.dateService.getMonthStart(new Date());
  }

  get monthEnd(): Date {
    return this.dateService.getMonthEnd(new Date());
  }
  filters: any = {
    dpto :  {"title":"Depto.", "value":""},
    mnpo  : {"title":"Mun.", "value":""},
    institut :  {"title":"Instituto", "value":""},
    profile:{"title":"Perfil", "value":""},
    grado:{"title":"Grado", "value":""},
    estrato:{"title":"Estrato", "value":""},
    edad:{"title":"Edad", "value":""},
  };
  queryParams = [];
  stats: any;

  /** chart d3js */
  single: any[];
  multi: any[];
  profile_view: any[] = [2000, 180]; //Perfiles
  institution_view: any[] = [600, 300]; //Perfiles
  pie_view: any[] ;

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'name';
  showYAxisLabel = true;
  yAxisLabel = 'value';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor( private _surveyService: SurveyService,protected dateService: NbDateService<Date>,

    ) {
    this.range = {
      start: this.dateService.addDay(this.monthStart, -30*3),
      end:new Date(),
    };



  }

  ngOnInit(): void {
    this.getTable("orientat/stats", this.filters,this.range)

  }
  onRangeChange(event){
    if(event.start && event.end){
      console.log(event)

      this.getTable("orientat/stats", this.filters, event)
    }

  }
  getTable(tableName,filters, range) {
    this.loading = true;

    this._surveyService.getTableDataParams(tableName, filters,range  ).subscribe({
      next: (tableData: any) => {
        this.stats = tableData;
        this.loading = false;
      },
    });
  }
  onSelect(event) {
    console.log(event);

     //enviar solo las variables que no sean *
     this.filters[event.extra.filter].value  = event.label
     //check if filter is already set:
     let found = this.filters_list.find( (filter:any)=>{
       if(filter.id.includes(event.extra.filter)){
         filter.value =  filter.title +": " +  event.label;
         return true;
       }
     })
     if(!found){
      this.filters_list.push({
        title:this.filters[event.extra.filter].title,
        id: event.extra.filter,
        value: this.filters[event.extra.filter].title +": " +  event.label
      });
     }
/*
     for (let key in this.filters) {
      let value = this.filters[key];
      if(value !== "*"){
        this.queryParams[key] = value;
      }
     }*/

     //Actualizar datos enviando el query
     this.getTable("orientat/stats",  this.filters, this.range);

  }
  onResize(event) {
    this.profile_view = [event.target.innerWidth - 600, 700];
  }
  onClick(filter, value){
    //enviar solo las variables que no sean *
    this.filters[filter]  = value;
    this.filters.array.forEach(stat => {
      if(stat !== "*"){
        this.queryParams.push(stat);
      }
    });

    //Reload based on query

  }
  setLabelFormatting(c): string {
    return `${c.label}<br/><span style=" white-space: normal!important;" class="custom-label-text no-trimmed-label">${c.label}</span>`;
  }


  onTagRemove(tagToRemove: NbTagComponent): void {
    this.filters_list = this.filters_list.filter(
      t => {
       if(t.value !== tagToRemove.text) {
         return true;
       }else{
         this.filters[t.id].value = "";
       }
      }

      );


    this.getTable("orientat/stats",  this.filters, this.range);
  }
}
