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
  constructor(private rutaActiva: ActivatedRoute, private libroService:LibrosService) { }

  ngOnInit() {
   this.getLibro();
   console.log(this.libro);
  }

  getLibro(){
    console.log(this.rutaActiva.snapshot.params['isbn']);
    this.libroService.getLibro(this.rutaActiva.snapshot.params["isbn"]).subscribe(resp=>{
      this.libro = resp.docs[0];
      console.log(this.libro);

    });
  }

}
