import { Routes } from '@angular/router';
import { Home } from './core/home/home';
import { Notfound } from './core/notfound/notfound';
import { Superheroes } from './components/superheroes/superheroes';
import { Solicitud } from './components/solicitud/solicitud';
import { Supervillanos } from './components/supervillanos/supervillanos';
import { Superjefe } from './components/superjefe/superjefe';
import { Estadisticas } from './components/estadisticas/estadisticas';

export const routes: Routes = [
    {'path': '', component: Home},
    {'path': 'home', component: Home},
    {'path': 'superheroes', component: Superheroes},
    {'path': 'supervillanos', component: Supervillanos},
    {'path': 'solicitud', component: Solicitud},
    {'path': 'superjefe', component: Superjefe},
    {'path': 'estadisticas', component: Estadisticas},
    {'path': '**', component: Notfound}
];
