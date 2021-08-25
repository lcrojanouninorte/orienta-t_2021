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
  dataG: { labels: string[]; datasets: ({ label: string; backgroundColor: string; borderWidth: number; data: number[]; } | { label: string; backgroundColor: string; data: number[]; borderWidth?: undefined; })[]; };

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
    let i = 0;
    this.ppsRanking.forEach(ppsRank=>{
      this.labels[i] = ppsRank.pps.title;
      this.data_chart[i] = ppsRank.total;
      i = i + 1;
    });
    this.buildChart(this.labels, this.data_chart);
  }

  buildChart(labels, data_chart){
   // this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
   //   const colors: any = config.variables;
   //   const chartjs: any = config.variables.chartjs;

   this.dataG = {
    labels: labels,

    datasets: [{
        label: 'Perfiles Ocupacionales',
        backgroundColor: "#8E6BFE",
        borderWidth: 1,

        data: data_chart,
      },
    ],
  };
    this.options = {

        responsive: true,
        maintainAspectRatio: false,
        elements: {
          rectangle: {
            borderWidth: 2,
            borderColor: "#000000",
          },
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false,
                color: "#ffffff",
              },
              ticks: {
                fontColor: "#ffffff",
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                display: false,
                color: "#ffffff",
              },
              ticks: {
                fontColor: "#fffff",
              },
            },
          ],
        },
        legend: {
          position: 'top',
          labels: {
            fontColor: "#000000",
            font: {
              family: "Helvetica Neue",
              size: 16
          }
          },
        },
      };




      this.chart.update();
      //});

  }
  private random() {
    return Math.round(Math.random() * 100);
  }

  ngOnDestroy(): void {
   // this.themeSubscription.unsubscribe();
  //  clearInterval(this.intervalUpdate);
}


}
