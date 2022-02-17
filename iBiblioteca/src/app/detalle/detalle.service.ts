import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Libro } from '../biblioteca/libro.interface';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  listaFavoritos:Libro[] = [];
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this._storage = storage;
    this._storage.set("listaFavoritos",this.listaFavoritos);
  }

  public set(key: string, value: any) {
    this._storage?.set(key, value);
  }

  public getStorage(){
    return this.storage;
  }

}
