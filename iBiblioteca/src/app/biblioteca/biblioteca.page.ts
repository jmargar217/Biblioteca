import { Component, OnInit } from '@angular/core';
import { LibrosService } from './libros.service';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.page.html',
  styleUrls: ['./biblioteca.page.scss'],
})
export class BibliotecaPage implements OnInit {

  constructor(private librosService:LibrosService) { }

  ngOnInit() {
  }

}
