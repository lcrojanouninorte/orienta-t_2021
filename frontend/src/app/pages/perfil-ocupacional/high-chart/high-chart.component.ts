import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-high-chart',
  templateUrl: './high-chart.component.html',
  styleUrls: ['./high-chart.component.scss']
})
export class HighChartComponent implements OnInit {

  constructor() { }
  @Input() labels:[]
  @Input() datasets:[]
  @Input() title: string
  data: any;
  options: any;
  themeSubscription: any;
  ngOnInit(): void {

    this.data = {
      labels: this.labels,
      datasets: [{
        data: this.datasets,
        backgroundColor: ["white", "purple"],
      }],
    };

    this.options = {
      maintainAspectRatio: false,
      responsive: true,
      scales: {
        xAxes: [
          {
            display: false,
          },
        ],
        yAxes: [
          {
            display: false,
          },
        ],
      },
      legend: {
        labels: {
          fontColor: "red",
        },
      },
    };

  }

}
