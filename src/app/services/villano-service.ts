import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Libreria para hacer las llamadas HTTP
import { Observable } from 'rxjs/internal/Observable';
import { Heroe    } from '../models/heroe';
import { firstValueFrom } from 'rxjs';


@Injectable({
  providedIn: 'root',
})

// Hay que crear el constructor para poder Inyectar 
export class VillanoService {
  // Clase HTTP 
  urlBase = 'http://localhost:5000/api/heroes'  // Backend
  constructor(private http: HttpClient){  }

    /* Se crea un get villanos. Antes de escribir la ruta a mano, se crea un atributo
     URL BASE.
     Devuelve un OBSERVABLE de una lista de Heroe.*/
    getVillanos(): Observable<Heroe[]> {
      return this.http.get<Heroe[]>(this.urlBase);
    }

    /* Se cre un delete villanos. Esto devuelve un PROMISE void.
      Elimina a un supervillano de la lista
     */
    async deleteVillano(id: string): Promise<void> {
      return await firstValueFrom(this.http.delete<void>(`${this.urlBase}/${id}`));
    }
}
