import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Libro } from '../biblioteca/libro.interface';
import { LibrosService } from '../biblioteca/libros.service';
import { StorageService } from './detalle.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {
  libro!:Libro;
  listaFavoritos:Libro[]=[];
  isFavorito: boolean = false;
  ver: boolean = false;

  constructor(private rutaActiva: ActivatedRoute, private libroService:LibrosService,
    private almacenService:StorageService) { }

  ngOnInit() {
    this.getLibro();
    this.almacenService.cargarFavoritos();

  }

  getLibro(){
    this.libroService.getLibro(this.rutaActiva.snapshot.params["isbn"]).subscribe({
      next: data =>{
        this.libro = data.docs[0];
        this.ver = true;
        //Compruebo si el libro es favorito para mostrar en la vista un botón u otro
        this.comprobarFavorito(this.libro);
      }

    });
  }

  comprobarFavorito(libro: Libro){
    // Recorre el storage del servicio en busca del libro
    this.almacenService.findLibroFavorito(libro.isbn[2]).then(
      favorito => {
        if(favorito){
          this.isFavorito = true;
        }else{
          this.isFavorito = false;
        }
      }
    )

  }

  //Recibe el isbn del libro como clave y el libro como valor
  addFavorito(storageKey: string, value: any){
    this.almacenService.addFavorito(storageKey, value);
    this.isFavorito = true;
  }

  //Borra a través del isbn del libro
  borrarFavorito(storageKey: string){
    this.almacenService.borrarFavorito(storageKey);
    this.isFavorito = false;
  }
}
