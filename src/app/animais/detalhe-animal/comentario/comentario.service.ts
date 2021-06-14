import { Comentario, Comentarios } from './comentario';
import { Observable } from 'rxjs';
import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API = environment.apiURL;
@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  constructor(private http: HttpClient) { }

  buscarComentario(id: number): Observable<Comentario>{
    return this.http.get<Comentario>(`${API}/photos/${id}/comments`);
  }

  incluirComentario(id: number, commentText:string): Observable<Comentarios>{
    return this.http.post<Comentarios>(`${API}/photos/${id}/comments`,{
      commentText,
    });
  }
}
