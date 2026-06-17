import { Component } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartOptions } from 'chart.js';

import { Chart, ArcElement, PieController, Tooltip, Legend } from 'chart.js';
Chart.register(ArcElement, PieController, Tooltip, Legend);

@Component({
  selector: 'app-grafica-tarta',
  imports: [BaseChartDirective],
  templateUrl: './grafica-tarta.html',
  styleUrls: ['./grafica-tarta.css'],
})
export class GraficaTarta {
  pieChartData = {
    labels: ['Amigos', 'Enemigos', 'Neutrales'],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ['#4caf50', '#f44336', '#ffeb3b'],
      }
    ]
  };

  pieChartOptions: ChartOptions<'pie'> = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: {
        display: true,
        text: 'Distribución de héroes por alineación'
      }
    },
    animation: {
      duration: 800,
      easing: 'easeOutBounce'
    }
  };
}
