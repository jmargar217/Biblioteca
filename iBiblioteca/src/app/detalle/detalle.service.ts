import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Libro } from '../biblioteca/libro.interface';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  listaFavoritos:Libro[] = [];

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    await this.storage.create();

  }

  async findLibroFavorito(storageKey: string){
    return await this.storage.get(storageKey);
  }

  async addFavorito(storageKey: string, value: any){
    return await this.storage.set(storageKey, value);
  }

  async borrarFavorito(storageKey: string){
    return await this.storage.remove(storageKey);
  }

  async getLibrosFavoritos(){
    return this.listaFavoritos;
  }

  async deleteAllFavorites(){
    await this.storage.clear();
  }

  //Añade a la lista de favoritos los libros que se encuentran en el storage
  async cargarFavoritos(){

    this.storage.forEach((key, value) => {
      this.listaFavoritos.push(key);
    });
  }

}
