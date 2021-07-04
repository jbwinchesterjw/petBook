import { RouterTestingModule } from '@angular/router/testing';
import { environment } from './../../environments/environment';
import { TokenService } from './../autenticacao/token.service';
import { Animais, Animal } from './animais';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, mapTo } from 'rxjs/operators';

const API = environment.apiURL;
const NOT_MODIFEIED = '304';

@Injectable({
  providedIn: 'root'
})
export class AnimaisService {

  constructor(private http: HttpClient, private tokenService: TokenService) { }

  listaDoUsuario(nomeDoUsuario: string): Observable<Animais> {
    /*const token = this.tokenService.retornaToken(); Não preciso mas dessa logica pois estou passando isso no meu autenticação interceptor
    const headers = new HttpHeaders().append('x-access-token', token);*/
    return this.http.get<Animais>(`${API}/${nomeDoUsuario}/photos`, {//  headers,
    });
  }

  buscarPorId(id: number): Observable<Animal> {
    /* const token = this.tokenService.retornaToken();
     const headers = new HttpHeaders().append('x-access-token', token);*/
    return this.http.get<Animal>(`${API}/photos/${id}`);// {headers});
  }
  excluirAnimal(id: number): Observable<Animal> {
    return this.http.delete<Animal>(`${API}/photos/${id}`);
  }

  curtir(id: number): Observable<boolean> {
    return this.http.post(`${API}/photos/${id}`, {}, { observe: 'response' }).pipe(mapTo(true), catchError((error) => {
      return error.status === NOT_MODIFEIED ? of(false) : throwError(error);
    })
    );
  }

  upload(descricao: string, permiteComentario: boolean, arquivo: File) {
    const formData = new FormData();
    formData.append('description', descricao);
    formData.append('allowComments', permiteComentario ? 'true' : 'false');
    formData.append('imageFile', arquivo);

    return this.http.post(`${API}/photos/upload`, formData, {
      observe: 'events',
      reportProgress: true,
    });
  }
}
