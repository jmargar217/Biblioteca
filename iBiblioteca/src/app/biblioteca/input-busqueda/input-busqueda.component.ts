import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-busqueda',
  templateUrl: './input-busqueda.component.html',
  styleUrls: ['./input-busqueda.component.scss'],
})
export class InputBusquedaComponent implements OnInit {
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  termino:string = '';
  constructor() { }

  ngOnInit() {}

  buscar(){
    this.onEnter.emit(this.termino);
  }

}
