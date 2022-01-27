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
  constructor(private librosService:LibrosService) { }

  ngOnInit() {
    this.getLibros();
  }

  getLibros(){
    this.librosService.getLibros().subscribe(datos =>{
      this.libros = datos.docs;
      console.log(this.libros);
    });
  }

}
