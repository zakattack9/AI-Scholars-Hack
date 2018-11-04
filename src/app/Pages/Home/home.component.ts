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
    let dataPoints = [
      { label: "MON",  y: 10, color: "#13b1d0" },
      { label: "TUE", y: 15, color: "#13b1d0"  },
      { label: "WED", y: 25, color: "#13b1d0"  },
      { label: "THU",  y: 30, color: "#13b1d0"  },
      { label: "FRI",  y: 28, color: "#13b1d0"  },
      { label: "SAT",  y: 28, color: "#13b1d0"  },
      { label: "SUN",  y: 28, color: "#13b1d0"  },
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
          lineColor: "#13b1d0",
          dataPoints: dataPoints
        }
      ],
      axisY:{
        suffix: " min"
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
  }
}
