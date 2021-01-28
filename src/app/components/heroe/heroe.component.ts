import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HeroesService, Heroe } from '../../servicios/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent implements OnInit {

  heroe: Heroe;

  constructor(
              private activatedRoute: ActivatedRoute,
              private heroesService: HeroesService
            ) {

    this.activatedRoute.params.subscribe((parametrosURL) => {
    /*
      paramertrosURL seran los especificados en el Routes:  path: '/heroe/:id'
      parametros: id
    */

    // console.log(parametrosURL);
    this.heroe = this.heroesService.getHeroe(parametrosURL.id);

  });

  }

  ngOnInit(): void {
    // console.log(this.heroe);
  }

}
