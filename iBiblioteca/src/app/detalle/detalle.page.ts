import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Libro } from '../biblioteca/libro.interface';
import { LibrosService } from '../biblioteca/libros.service';
import { Storage } from '@ionic/storage';
import { StorageService } from './storage.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {
  libro!:Libro;
  favorito:boolean = false;
  mostrar:boolean = false;

  constructor(private rutaActiva: ActivatedRoute, private libroService:LibrosService,
    private almacenService:StorageService,
    private storage: Storage) { }

  async ngOnInit() {
    this.getLibro();
    await this.storage.create();
  }

  getLibro(){
    this.libroService.getLibro(this.rutaActiva.snapshot.params["isbn"]).subscribe(resp=>{
      this.libro = resp.docs[0];
      this.mostrar = true;
    });
  }

  addFavorito(){
    if(this.favorito){
      this.favorito= false;
    }else{
      this.favorito=true;

    }
  }

}
