import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Heroe } from '../../servicios/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe: Heroe;
  @Input() index: number;

  // El nombre del evento (observable) a emitir, junto con el tipo de dato a emitir
  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor( private router: Router ) {
    // Inicializamos el evento
    this.heroeSeleccionado = new EventEmitter();
   }

  ngOnInit(): void {
  }

  verHeroe(){
    this.router.navigate(['/heroe', this.index]);

    // emitimos el evento juntos con el valor
    // this.heroeSeleccionado.emit( this.index );

  }

}
