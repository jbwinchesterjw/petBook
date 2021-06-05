import { Injectable } from '@angular/core';
import { Key } from 'selenium-webdriver';

const KEY = 'token';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  retornaToken() {
    return localStorage.getItem(KEY) ?? '';
  }

  salvaToken(token: string) {
    localStorage.setItem(KEY, token);
  }

  excluirToken(){
    localStorage.removeItem(KEY);
  }

  possueToken(){
    return !! this.retornaToken();
  }
}
