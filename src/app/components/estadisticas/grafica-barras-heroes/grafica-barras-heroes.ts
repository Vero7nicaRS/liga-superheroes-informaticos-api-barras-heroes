import { CommonModule } from '@angular/common';
import { Component, OnInit, signal, computed } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { Chart, BarController, BarElement, CategoryScale, LinearScale, ChartConfiguration } from 'chart.js';
import { VillanoService } from '../../../services/villano-service';
import { Heroe } from '../../../models/heroe';

Chart.register(BarController, BarElement, CategoryScale, LinearScale);

@Component({
  selector: 'app-grafica-barras-heroes',
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './grafica-barras-heroes.html',
  styleUrls: ['./grafica-barras-heroes.css'],
})
export class GraficaBarrasHeroes implements OnInit {

  /* Listado de los superheroes. 
  Se inicializa como vacía, pero cuando se obtienen valores desde la API, ya tiene
  un listado de heroes. */
  heroes = signal<Heroe[]>([]);

  /* Cada vez que haya un cambio en "heroes", actualiza "mediasSuperheroes" (computed).
    Este atributo contiene las medias de cada atributo de los superheroes.
  */
  mediasSuperheroes = computed(() => {
    const heroes = this.heroes();

    // Si hay un listado de héroes, se realiza su media.
    if (heroes.length !== 0) {
      return [
        this.calcularMediaHeroe(heroes, 'inteligencia'),
        this.calcularMediaHeroe(heroes, 'fuerza'),
        this.calcularMediaHeroe(heroes, 'velocidad'),
        this.calcularMediaHeroe(heroes, 'durabilidad'),
        this.calcularMediaHeroe(heroes, 'poder'),
        this.calcularMediaHeroe(heroes, 'combate'),
      ];
    }else{ 
      // Si el listado de héroes está vacío, se devuelve la gráfica vacía.
      return [0, 0, 0, 0, 0, 0];
    }
 
  });

  barChartData = computed(() => ({
    labels: ['Inteligencia', 'Fuerza', 'Velocidad', 'Durabilidad', 'Poder', 'Combate'],
    datasets: [
      {
        label: 'Media de atributos', // Leyenda
        data: this.mediasSuperheroes(), // Lo que muestra la gráfica de barras es la media de todos los superheroes (excepto de los villanos).
        backgroundColor: '#eb6c05', // Color de la gráfica de barras.
      }
    ]
  }));

  // Opciones de la gráfica
  barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        max: 100
      }
    },
    animation: {
      duration: 800,
      easing: 'easeOutBounce'
    }
  };

  constructor(private villanoService: VillanoService) {}

  // La gráfica de barras se va a inicializar con los superheroes.
  ngOnInit(): void {
    // Obtiene de la API el listado de heroes y villanos.
    this.villanoService.getVillanos().subscribe(heroesvillanos => {
      // Se queda con aquellos que son SUPERHEROES (alineación: "amigo").
      const superheroes = heroesvillanos.filter(hv => hv.alineacion === 'amigo');
      this.heroes.set(superheroes);
    });
  }

  // Calcula la media de los atributos.
  calcularMediaHeroe(heroes: Heroe[], atributo: keyof Heroe): number {
    /* Realiza la suma de los valores de un determinado atributo del héroe (inteligencia, fuerza...). 
      Para ello, se utiliza "reduce" que recorre todos los héroes 
      y va almacenando en "acumulador" los valores del atributo del héroe. 
      El acumulador empieza con el valor "0" y "h" se refiere al héroe.
    */
    const suma = heroes.reduce((acumulador, h) => acumulador + Number(h[atributo]), 0);

    const resultado =  Math.round(suma / heroes.length); // Realiza la media.
    return resultado;
  }
}