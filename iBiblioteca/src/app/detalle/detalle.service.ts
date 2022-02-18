import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Libro } from '../biblioteca/libro.interface';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  existe:boolean = false;
  listaFavoritos:Libro[] = [];
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this._storage = storage;


  }

  public set(key: string, value: any) {
    this._storage?.set(key, value);
  }

  public getLibrosFavoritos(){
    return this.listaFavoritos;
  }

}
