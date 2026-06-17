import { Component } from '@angular/core';
import { GraficaBarras } from './grafica-barras/grafica-barras';
import { GraficaTarta } from './grafica-tarta/grafica-tarta';
import { GraficaBarrasHeroes } from './grafica-barras-heroes/grafica-barras-heroes';

@Component({
  selector: 'app-estadisticas',
  imports: [GraficaBarras, GraficaTarta, GraficaBarrasHeroes], //Se añade "GraficaBarrasHeroes"
  templateUrl: './estadisticas.html',
  styleUrl: './estadisticas.css',
})
export class Estadisticas {}
