import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// Componentes
import { HomeComponent } from './components/home/home.component';
import { HeroresComponent } from './components/herores/herores.component';
import { AboutComponent } from './components/about/about.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BusquedaHeroesComponent } from './components/busqueda-heroes/busqueda-heroes.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'heroes', component: HeroresComponent },
  { path: 'heroe/:id', component: HeroeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'busquedaHeroe/:termino', component: BusquedaHeroesComponent },
  { path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class APP_ROUTING{}
