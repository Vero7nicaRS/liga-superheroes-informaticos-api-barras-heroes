import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Heroe } from '../../models/heroe';
import { Superheroe } from '../superheroes/superheroe/superheroe';
import { HeroesService } from '../../services/heroes-service';

@Component({
  selector: 'app-solicitud',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, Superheroe],
  templateUrl: './solicitud.html',
  styleUrl: './solicitud.css',
})
export class Solicitud {

  /* ------------------------------------------------------------
     ESTADO REACTIVO CON SIGNALS
  ------------------------------------------------------------ */
  formulario: FormGroup;
  heroePropuesto = signal<Heroe>(new Heroe('', '', '', '', '', '', '', 0, 0, 0, 0, 0, 0, 0));
  archivoSeleccionado: File | null = null;
  archivoError = signal(false);

  constructor(private fb: FormBuilder, private heroesService: HeroesService) {
    this.formulario = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      descripcion: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      tipo: ['', Validators.required],
      numeroMedallas: [0, [Validators.required, Validators.min(0)]]
    });
  }

  /* ------------------------------------------------------------
     SELECCIÓN DE ARCHIVO
  ------------------------------------------------------------ */
  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      this.archivoSeleccionado = input.files[0];
      this.archivoError.set(false);
    } else {
      this.archivoSeleccionado = null;
      this.archivoError.set(true);
    }
  }

  /* ------------------------------------------------------------
     REGISTRAR NUEVO HÉROE
  ------------------------------------------------------------ */
  async registrarHeroe() {
    // 1. Validar formulario y archivo
    if (this.formulario.invalid || !this.archivoSeleccionado) {
      this.formulario.markAllAsTouched();
      this.archivoError.set(!this.archivoSeleccionado);
      return;
    }

    const f = this.formulario.value;

    // 2. Subir imagen al backend
    const response = await this.heroesService.uploadImage(this.archivoSeleccionado);

    // 3. Crear héroe con el filename devuelto
    const nuevoHeroe = new Heroe(
      crypto.randomUUID(),
      f.nombre,
      f.descripcion,
      response.filename,
      'amigo',
      f.tipo,
      f.email,
      f.numeroMedallas,
      0, 0, 0, 0, 0, 0
    );

    // 4. Guardar héroe en backend
    await this.heroesService.postHeroe(nuevoHeroe);

    // 5. Actualizar estado reactivo
    this.formulario.reset();
    this.archivoSeleccionado = null;
    this.heroePropuesto.set(nuevoHeroe);
  }
}
