import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { Chart, BarController, BarElement, CategoryScale, LinearScale, ChartConfiguration } from 'chart.js';
Chart.register(BarController, BarElement, CategoryScale, LinearScale);

@Component({
  selector: 'app-grafica-barras',
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './grafica-barras.html',
  styleUrls: ['./grafica-barras.css'],
})
export class GraficaBarras {
   barChartData = {
    labels: ['Madrid', 'Barcelona', 'Valencia'],
    datasets: [
      {
        label: 'Ciudades con más personas',
        data: [
          200,
          150,
          100
        ],
        backgroundColor: '#eb6c05',
      }
    ]
  };

  barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    scales: { y: { beginAtZero: true } },
    animation: {
      duration: 800,
      easing: 'easeOutBounce'
    }

  };

}
