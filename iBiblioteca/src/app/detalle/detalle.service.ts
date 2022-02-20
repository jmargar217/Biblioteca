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

  async getLibrosFavoritos(){
    return this.listaFavoritos;
  }

  async cargarFavoritos():Promise<Libro[]>{
    this.storage.get("listaFavoritos").then(resp=>{
      this.listaFavoritos=resp;
    });
   return this.listaFavoritos;
  }


  async isFavorito(libro:Libro){
    let found = false;
    let aux:Libro[] = [];
    this.storage.get("listaFavoritos").then(resp=>{
      aux = resp;
    });
     for(let i=0;i<aux.length;i++){
      if(aux[i].isbn[0]==libro.isbn[0]){
        console.log(aux[i]);
        found = true;
      }
     }
    return found;
  }
}
