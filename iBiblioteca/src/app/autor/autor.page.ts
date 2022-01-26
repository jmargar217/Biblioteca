import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.page.html',
  styleUrls: ['./autor.page.scss'],
})
export class AutorPage implements OnInit {

  public autor = {
    correo: "gmail@gmail.com",
    twitter: "https://twitter.com/iesjacaranda",
    telefono: "645810333"
  }
  constructor() { }

  ngOnInit() {
  }

}
