import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Libros } from './libro.interface';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  private url:string = "http://openlibrary.org/search.json?author=tolkien&limit=10";
  constructor(private http:HttpClient) { }

  getLibros():Observable<Libros>{
    return this.http.get<Libros>(this.url);
  }
}
