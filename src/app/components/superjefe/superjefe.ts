import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Mensaje } from './mensaje/mensaje';

@Component({
  selector: 'app-superjefe',
  imports: [ReactiveFormsModule, Mensaje],
  templateUrl: './superjefe.html',
  styleUrl: './superjefe.css',
})
export class Superjefe {
  formulario: FormGroup;
  mensajes: { remitente: string; edad: number; mensaje: string }[] = [];

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      remitente: ['', [Validators.required, Validators.maxLength(20)]],
      edad: ['', [Validators.required, Validators.min(0), Validators.max(99)]],
      mensaje: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(14)]],
    });
  }

  enviarMensaje() {
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    }
    this.mensajes.push(this.formulario.value);
    this.formulario.reset();
  }
}
