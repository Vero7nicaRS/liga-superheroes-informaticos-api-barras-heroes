// Importamos las funciones necesarias de NgRx.
// createFeatureSelector permite acceder a una parte concreta del Store.
// createSelector permite crear consultas derivadas del estado.
import { createFeatureSelector, createSelector } from "@ngrx/store";

// Importamos la interfaz que define la forma del estado de héroes.
import { HeroesState } from "./heroes.state";


// 1. Seleccionamos la rama "heroes" del Store global.
//
// En app.config.ts habremos registrado algo parecido a:
//
// provideStore({
//   heroes: heroesReducer
// })
//
// Por eso aquí usamos el nombre 'heroes'.
export const selectHeroesState =
  createFeatureSelector<HeroesState>('heroes');


// 2. Creamos un selector concreto para obtener solo los IDs favoritos.
//
// Este selector recibe todo el estado de heroes:
//
// {
//   favoritosIds: ['1', '3']
// }
//
// y devuelve únicamente:
//
// ['1', '3']
export const selectFavoritosIds = createSelector(

  // Selector base: obtiene todo el estado de heroes.
  selectHeroesState,

  // Función de proyección: extrae una parte concreta del estado.
  (state) => state.favoritosIds

);