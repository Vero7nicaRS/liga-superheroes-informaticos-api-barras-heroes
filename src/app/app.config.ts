import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { heroesReducer } from './store/heroes/heroes.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { HeroesEffects } from './store/heroes/heroes.effects';
import { provideEffects } from '@ngrx/effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideStore({
      heroes: heroesReducer
    }),
    provideStoreDevtools({
      maxAge: 25
    }),
    provideEffects([
    HeroesEffects
  ])
  ]
};
