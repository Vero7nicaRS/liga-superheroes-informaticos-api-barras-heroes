import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.html',
})
export class Mensaje {
  @Input() mensaje!: { remitente: string; edad: number; mensaje: string };
}
