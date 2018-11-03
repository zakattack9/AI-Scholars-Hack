import { Component, OnInit } from '@angular/core';
import * as CanvasJS from './canvasjs.min';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  subjects = ['Math', 'English', 'Physics'];
  techniques = ['Pomodoro', '20/20/20'];
  ngOnInit() {
    let dataPoints = [];
    let y = 0;
    for (var i = 0; i < 8; i++) {
      y += Math.round(2 - Math.random() * (-5 - 5));
      dataPoints.push({ y: y });
    }
    let chart = new CanvasJS.Chart('chartContainer', {
      zoomEnabled: true,
      animationEnabled: true,
      title: {
        text: 'Weekly Graph'
      },
      subtitles: [
        {
          text: ''
        }
      ],
      data: [
        {
          type: 'line',
          dataPoints: dataPoints
        }
      ],
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
  }
}
