import { Injectable } from '@angular/core';
import { Estudios } from './estudios.interface';

@Injectable({
  providedIn: 'root'
})
export class EstudiosService {

  private listaEstudios:Estudios[] = [
    {fecha:"2010-actualidad:",descripcion:"Profesor del Máster Universitario en Desarrollo de Software para Dispositivos Móviles."},
    {fecha:"2008-2010:",descripcion:"Sexador de pollos en AngryChicken."},
    {fecha:"2005-2007:",descripcion:"Bachillerato de Humanidades Sociales"},
    {fecha:"2003-2004:",descripcion:"Grado Medio en Sistemas Microinformáticos"}
  ]
  constructor() { }


  getEstudios(){
    return[...this.listaEstudios];
  }
}
