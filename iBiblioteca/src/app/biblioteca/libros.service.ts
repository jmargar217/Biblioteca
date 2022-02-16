import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Libro, Libros } from './libro.interface';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  constructor(private http:HttpClient) { }

  getLibros(termino:string):Observable<Libros>{
    let url = "http://openlibrary.org/search.json";

    const params = new HttpParams()
    .set('title',termino)
    .set('limit',10);
    return this.http.get<Libros>(url,{params:params});
  }

  getLibro(isbn:string){
    let url = `http://openlibrary.org/search.json?isbn=${isbn}`;
    /*
    const params = new HttpParams()
    .set('title',isbn);
    */

    return this.http.get<Libros>(url);
  }

}
