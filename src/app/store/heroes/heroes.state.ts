// Definimos la interfaz que describe la estructura del estado
// que va a gestionar NgRx para la funcionalidad de héroes.
//
// En este ejemplo solo vamos a almacenar los identificadores
// de los héroes marcados como favoritos.
export interface HeroesState {

  // Array de IDs de héroes favoritos.
  //
  // Ejemplo:
  //
  // favoritosIds = ['1', '3']
  //
  // Significa que los héroes con id 1 y 3
  // están marcados como favoritos.
  favoritosIds: string[];

}


// Estado inicial del Store.
//
// Este será el valor que tendrá el Store cuando
// se arranque la aplicación por primera vez.
export const initialHeroesState: HeroesState = {

  // Inicialmente no hay favoritos.
  favoritosIds: []

};