import { Component, OnInit } from '@angular/core';

import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-herores',
  templateUrl: './herores.component.html',
  styles: [
  ]
})
export class HeroresComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor(
              private heroesService: HeroesService,
              private router:Router
              ) {}

  ngOnInit(): void {
      this.heroes = this.heroesService.getHeroes();
  }

  verHeroe(idx: number){
      this.router.navigate(['/heroe',idx]);
  }

}
