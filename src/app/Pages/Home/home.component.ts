import { Component, OnInit } from '@angular/core';
import * as CanvasJS from './canvasjs.min';
import { BackendService } from 'src/Services/backend.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private backend: BackendService) {}
  study;
  break;
  cycles;
  looked_away;
  total;
  subjects = ['Math', 'English', 'Physics'];
  techniques = ['Pomodoro', '20/20/20'];
  ngOnInit() {
    return this.backend.getStats().then(result => {
      let rArr = Array.from(result)[Array.from(result).length - 1];
      this.study = rArr.studying;
      this.break = rArr.break;
      this.cycles = rArr.cycles;
      this.looked_away = rArr.looked_away;
      this.total = rArr.break + rArr.studying;
      let dataPoints = [
        { label: 'MON', y: 10, color: '#13b1d0' },
        { label: 'TUE', y: 15, color: '#13b1d0' },
        { label: 'WED', y: 25, color: '#13b1d0' },
        { label: 'THU', y: 30, color: '#13b1d0' },
        { label: 'FRI', y: 28, color: '#13b1d0' },
        { label: 'SAT', y: 10, color: '#13b1d0' },
        {
          label: 'SUN',
          y: this.study,
          color: '#13b1d0'
        }
      ];
      let y = 0;
      // for (var i = 0; i < 8; i++) {
      //   y += Math.round(2 - Math.random() * (-5 - 5));
      //   dataPoints.push({ y: y });
      // }
      let chart = new CanvasJS.Chart('chartContainer', {
        zoomEnabled: true,
        animationEnabled: true,
        data: [
          {
            type: 'line',
            lineColor: '#13b1d0',
            dataPoints: dataPoints
          }
        ],
        axisY: {
          suffix: ' min'
        },
        options: {
          legend: {
            display: false
          },
          tooltips: {
            enabled: false
          }
        }
      });

      chart.render();
    });
  }
}
