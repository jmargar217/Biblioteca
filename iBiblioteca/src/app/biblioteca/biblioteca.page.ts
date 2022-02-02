import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { Libro } from './libro.interface';
import { LibrosService } from './libros.service';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.page.html',
  styleUrls: ['./biblioteca.page.scss'],
})
export class BibliotecaPage implements OnInit {

  libros:Libro[] = [];
  termino: string='';
  constructor(private librosService:LibrosService) { }

  ngOnInit() {

  }

  getLibros(termino:string){
    this.termino=termino;
    this.librosService.getLibros(this.termino).subscribe(datos =>{
      this.libros = datos.docs;
    });
  }

}
