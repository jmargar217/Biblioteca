import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Libro } from '../biblioteca/libro.interface';
import { LibrosService } from '../biblioteca/libros.service';
import { Storage } from '@ionic/storage';
import { StorageService } from './detalle.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {
  libro!:Libro;
  listaFavoritos:Libro[]=[];
  favorito:boolean = false;
  mostrar:boolean = false;

  constructor(private rutaActiva: ActivatedRoute, private libroService:LibrosService,
    private almacenService:StorageService,
    private storage: Storage) { }

    async ngOnInit() {
      this.getLibro();
      this.almacenService.cargarFavoritos().then(resp=>{
        console.log(resp);
        this.listaFavoritos=resp;
      });

    }

  getLibro(){
    this.libroService.getLibro(this.rutaActiva.snapshot.params["isbn"]).subscribe(resp=>{
      this.libro = resp.docs[0];
      this.mostrar = true;
    });
  }

  addFavorito(){
    if(!this.favorito){

      this.almacenService.listaFavoritos.push(this.libro);
      this.almacenService.set("listaFavoritos",this.almacenService.listaFavoritos);
      this.favorito= true;

    }else{
      let pos:number = this.almacenService.listaFavoritos.indexOf(this.libro);
      this.almacenService.listaFavoritos.splice(pos);
      this.almacenService.set("listaFavoritos",this.almacenService.listaFavoritos);
      this.favorito=false;
    }
  }

}
