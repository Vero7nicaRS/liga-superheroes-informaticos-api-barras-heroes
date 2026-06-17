// Importamos las funciones necesarias de NgRx.
//
// createAction: Permite crear una acción.
//
// props:  Permite definir qué datos transportará la acción.
import { createAction, props } from '@ngrx/store';


// Creamos la acción "toggleFavorito".
//
// Una acción representa algo que ha ocurrido en la aplicación.
//
// En este caso:
//
// "El usuario ha pulsado la estrella de favorito".
export const toggleFavorito = createAction(

  // Nombre descriptivo de la acción.
  //
  // [Heroes] indica el módulo o funcionalidad.
  // Toggle Favorito indica la operación realizada.
  //
  // Este nombre aparecerá en Redux DevTools.
  '[Heroes] Toggle Favorito',

  // Datos que transporta la acción.
  //
  // En este caso solo necesitamos conocer
  // el id del héroe pulsado.
  props<{ id: string }>()

);