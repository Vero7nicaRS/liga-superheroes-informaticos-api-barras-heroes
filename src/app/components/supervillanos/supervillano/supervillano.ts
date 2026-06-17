import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Heroe } from '../../../models/heroe';

@Component({
  selector: 'app-supervillano',
  imports: [],
  templateUrl: './supervillano.html',
  styleUrl: './supervillano.css',
})
export class Supervillano {
  @Input() villano!: Heroe;
  @Output() expulsar = new EventEmitter<Heroe>();
  @Output() modalImagen = new EventEmitter<Heroe>();
  expulsarVillano() {
    this.expulsar.emit(this.villano);
  }

  mostrarModal() {
    this.modalImagen.emit(this.villano);
  }
}
