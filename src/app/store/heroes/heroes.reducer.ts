// Importamos las funciones necesarias de NgRx.
//
// createReducer:
// Permite crear una función reducer.
//
// on:
// Permite indicar qué hacer cuando se recibe una acción concreta.
import { createReducer, on } from '@ngrx/store';


// Importamos el estado inicial.
//
// Este será el estado que tendrá el Store al arrancar la aplicación por primera vez.
import { initialHeroesState } from './heroes.state';


// Importamos la acción que queremos gestionar.
//
// En este caso la acción que marca o desmarca
// un héroe como favorito.
import { toggleFavorito } from './heroes.actions';


// Creamos el reducer.
//
// El reducer es una función pura que recibe:
//
// - El estado actual.
// - La acción recibida.
//
// Y devuelve:
//
// - Un nuevo estado.
export const heroesReducer = createReducer(

  // Estado inicial del Store.
  initialHeroesState,

  // Cuando llegue la acción toggleFavorito...
  on(

    toggleFavorito,

    // state = estado actual
    // id = identificador del héroe pulsado
    (state, { id }) => {

      // Comprobamos si el héroe ya está marcado
      // como favorito.
      const yaEsFavorito =
        state.favoritosIds.includes(id);

      // Devolvemos SIEMPRE un nuevo estado.
      //
      // Nunca modificamos directamente el estado actual.
      return {

        // Copiamos todo el estado anterior.
        ...state,

        // Calculamos el nuevo array de favoritos.
        favoritosIds:

          // Si ya era favorito...
          yaEsFavorito

            // Lo eliminamos de la lista.
            ? state.favoritosIds.filter(
                item => item !== id
              )

            // Si no era favorito...
            // Lo añadimos a la lista.
            : [
                ...state.favoritosIds,
                id
              ]

      };

    }

  )

);