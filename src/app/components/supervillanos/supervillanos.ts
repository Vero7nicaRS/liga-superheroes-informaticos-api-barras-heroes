import { /*ChangeDetectorRef , */ Component, OnInit ,signal ,computed} from '@angular/core'; // ChangeDetectorRef para que detecte cambios.
import { Heroe } from '../../models/heroe';
import { Supervillano } from './supervillano/supervillano';
import { VillanoService } from '../../services/villano-service';

declare var bootstrap: any;
@Component({
  selector: 'app-supervillanos',
  imports: [Supervillano],
  templateUrl: './supervillanos.html',
  styleUrl: './supervillanos.css',
})
export class Supervillanos implements OnInit {

/* Con SIGNAL conseguimos que Angular vigile estos dos valores.
 En el momento que cambien, se refrescan esos valores y mira los valores computados que hay, y le da el valor computado. 
*/
 // en_guerra: boolean = true;
  en_guerra = signal(true); // Utilización de SIGNAL -> se usa set()

// villanos: Heroe[] = [];
  villanos = signal<Heroe[]>([]); // Utilización de SIGNAL (Es un signal de una lista de héroes y que comience con una lista vacía)

// villanoSeleccionado: Heroe = new Heroe('', '', '', '', '', '', '', 0, 0, 0, 0, 0, 0, 0);
  villanoSeleccionado = signal<Heroe>(
    new Heroe('', '', '', '', '', '', '', 0, 0, 0, 0, 0, 0, 0)
  );


  // Se crea un constructor para el villano
  // No hace falta "ChangeDetectorRef" porque se utiliza SIGNAL.
  constructor(private villanoService: VillanoService /*, private cdr: ChangeDetectorRef*/){}

  ngOnInit(): void {
  /*  this.villanos = [
      new Heroe('6', 'Cliente IA', "Un villano que utiliza la inteligencia artificial para sus planes malvados", "Cliente_IA.png", "enemigo", "Negocio", "cliente_ia@mail.com", 0, 85, 40, 95, 50, 45, 35),
      new Heroe('7', 'Señor de los bugs', "Un villano que explota los errores y fallos del sistema para sus fines", "Bug_senior.png", "enemigo", "QA", "senor_bugs@mail.com", 0, 90, 30, 80, 60, 50, 40),
      new Heroe('8', 'Estimador matador', "Un villano que se alimenta de las pesadillas de sus víctimas", "Deadline_imposible.png", "enemigo", "Analista", "estimador_matador@mail.com", 0, 75, 85, 65, 70, 55, 45),
      new Heroe('9', 'Vendehumo cloud', "Un villano que promete soluciones en la nube pero solo causa problemas", "Cloud_master.png", "enemigo", "Analista", "vendehumo_cloud@mail.com", 0, 80, 70, 90, 60, 50, 40),
    ];
  */
    this.obtenerVillanos();
  }

  // Para obtener los villanos de la API
  obtenerVillanos(){
    // Cojo los héroes que obtengo del servicio.
    this.villanoService.getVillanos().subscribe(villanos => {
      // this.villanos = villanos;  (Aquí obtiene todos los superheroes y supervillanos)

      /* Para obtener a los villanos, hay que fijarse en el atributo "alineación".
        Este atributo tiene que tener como valor 'enemigo' para que sea un supervillano.
      */
      this.villanos.set( villanos.filter( v => v.alineacion === 'enemigo' ) ); // SIGNAL: set
    });

  }
  // Se elimina un supervillano utilizando ""
  expulsarVillano(villano: Heroe) {
    //this.villanos = this.villanos.filter(v => v !== villano);
    /* Llama al servicio "deleteVillano" pasándole el "id" y se suscribe. 
     Cuando haya una respuesta, hace un filtrado de la lista de villanos y le quita ese villano. 
     */
    this.villanoService.deleteVillano(villano.id).then(() => {
      this.villanos.set(this.villanos().filter( v => v.id !== villano.id)); //SIGNAL: set
      // this.cdr.detectChanges(); // Para que detecte cambios (Al usar signal no hace alta)
    });
  }   

  mostrarModal(villano: Heroe) {
    this.villanoSeleccionado.set(villano); //SIGNAL
    const modalElement = document.getElementById('modalImagen');
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
  }


}
