import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Libro } from '../biblioteca/libro.interface';
import { LibrosService } from '../biblioteca/libros.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {
  libro!:Libro;

  mostrar:boolean = false;

  constructor(private rutaActiva: ActivatedRoute, private libroService:LibrosService) { }

  ngOnInit() {
   this.getLibro();
  }

  getLibro(){
    this.libroService.getLibro(this.rutaActiva.snapshot.params["isbn"]).subscribe(resp=>{
      this.libro = resp.docs[0];
      this.mostrar = true;
    });
  }

}
