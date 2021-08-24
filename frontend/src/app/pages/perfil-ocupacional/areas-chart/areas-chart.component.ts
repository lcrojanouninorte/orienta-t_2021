import { Component, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PpsRank } from '@core/data/remote/schemas/pps_rank';
import { SurveyService } from '@core/data/remote/services/survey.service';
import { NbColorHelper, NbThemeService } from '@nebular/theme';
import { Chart } from 'chart.js';

@Component({
  selector: 'ngx-areas-chart',
  templateUrl: './areas-chart.component.html',
  styleUrls: ['./areas-chart.component.scss']
})
export class AreasChartComponent implements  OnDestroy  {
  public chart: any = null;

  data_chart = [];
  labels = [];
  data:any;
  options: any;
  themeSubscription: any;
  uuid: any;
  loading: boolean;
  ppsRanking: PpsRank[];
  intervalUpdate: NodeJS.Timeout;

  constructor(private theme: NbThemeService,private _Activatedroute: ActivatedRoute,
    private _surveyService: SurveyService,) {

  }
  ngOnInit(): void {
    this.uuid = this._Activatedroute.snapshot.paramMap.get("uuid")
    this.getPpsRanking(this.uuid);
  }

  getPpsRanking(uuid){
    this.loading = true;
    this._surveyService.getPpsRank(uuid).subscribe({
      next: (ppsRanking : PpsRank[] ) => {
        this.ppsRanking = ppsRanking;
        this.loading = false;
        this.loadChartData();

      },
    });
  }
  loadChartData(){

    this.ppsRanking.forEach(ppsRank=>{
      this.labels.push(ppsRank.pps.title);
      this.data_chart.push(ppsRank.total);
    })
    this.buildChart(this.data_chart,this.labels)
  }

  buildChart(data_chart,labels){
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;
      this.chart = new Chart('canvas', {
        type: 'bar',
        labels:labels,
        datasets: [
          {
            data: data_chart,
            borderColor: '#3cba9f',
            backgroundColor: "#0000FF"}],
          options :{
            responsive: true,
            maintainAspectRatio: false,
            elements: {
              rectangle: {
                borderWidth: 2,
              },
            },
            scales: {
              xAxes: [
                {
                  gridLines: {
                    display: true,
                    color: chartjs.axisLineColor,
                  },
                  ticks: {
                    fontColor: chartjs.textColor,
                  },
                },
              ],
              yAxes: [
                {
                  gridLines: {
                    display: false,
                    color: chartjs.axisLineColor,
                  },
                  ticks: {
                    fontColor: chartjs.textColor,
                  },
                },
              ],
            },
            legend: {
              position: 'right',
              labels: {
                fontColor: chartjs.textColor,
              },
            },
          }
      });

    });

  }
  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
    clearInterval(this.intervalUpdate);  }


}
