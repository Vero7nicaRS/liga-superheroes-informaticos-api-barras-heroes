import { inject, Injectable } from '@angular/core';

// Herramientas de NgRx Effects
import { Actions, createEffect, ofType } from '@ngrx/effects';

// Operador para ejecutar acciones secundarias
import { tap } from 'rxjs/operators';

// Action que queremos escuchar
import { toggleFavorito } from './heroes.actions';

@Injectable()
export class HeroesEffects {

  // Observable con todas las Actions de la aplicación
  private actions$ = inject(Actions);

  // Effect que escucha la Action toggleFavorito
  toggleFavorito$ = createEffect(

    () => this.actions$.pipe(

      // Filtra únicamente toggleFavorito
      ofType(toggleFavorito),

      // Acción secundaria
      tap(action => {

        console.log('Effect ejecutado');

        console.log(
          'Heroe favorito:',
          action.id
        );

      })

    ),

    {
      // No genera una nueva Action
      dispatch: false
    }

  );

}