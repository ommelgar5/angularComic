import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../servicios/heroes.service';

@Component({
  selector: 'app-busqueda-heroes',
  templateUrl: './busqueda-heroes.component.html',
})
export class BusquedaHeroesComponent implements OnInit {

  heroes: Heroe[];
  termino: string;

  constructor(
              private activatedRoute: ActivatedRoute,
              private heroesService: HeroesService
  ) { }

  ngOnInit(): void {
      this.activatedRoute.params.subscribe((parametrosURL) =>  {
        this.termino = parametrosURL.termino;
        this.heroes = this.heroesService.buscarHeroe(parametrosURL.termino);
    });
  }

}
