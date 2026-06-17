import { Injectable } from '@angular/core';
import { Heroe } from '../models/heroe';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  urlBase = 'http://localhost:5000/api';

  constructor(private http: HttpClient) {}

  /* Crear un nuevo héroe */
  async postHeroe(heroe: Heroe): Promise<Heroe> {
    return await firstValueFrom(this.http.post<Heroe>(`${this.urlBase}/heroes`, heroe));
  }

  /* Obtener lista de héroes */
  async getHeroes(): Promise<Heroe[]> {
    return await firstValueFrom(this.http.get<Heroe[]>(`${this.urlBase}/heroes`));
  }

  /* Eliminar héroe */
  async deleteHeroe(id: string): Promise<void> {
    await firstValueFrom(this.http.delete<void>(`${this.urlBase}/heroes/${id}`));
  }

  /* Actualizar héroe */
  async updateHeroe(id: string, heroe: Heroe): Promise<Heroe> {
    return await firstValueFrom(this.http.put<Heroe>(`${this.urlBase}/heroes/${id}`, heroe));
  }

  /* Subir imagen */
  async uploadImage(file: File): Promise<{ filename: string }> {
    const formData = new FormData();
    formData.append('file', file);
    return await firstValueFrom(this.http.post<{ filename: string }>(`${this.urlBase}/upload`, formData));
  }
}
