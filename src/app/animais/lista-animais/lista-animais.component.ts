import { switchMap } from 'rxjs/operators';
import { UsuarioService } from './../../autenticacao/usuario/usuario.service';
import { Animais } from './../animais';
import { Component, OnInit } from '@angular/core';
import { AnimaisService } from '../animais.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-animais',
  templateUrl: './lista-animais.component.html',
  styleUrls: ['./lista-animais.component.css']
})
export class ListaAnimaisComponent implements OnInit {
  animais$ !: Observable <Animais>; //o $ indica que que será um observable porem não e obrigatorio
  constructor(private usuarioService: UsuarioService, private animaisService : AnimaisService) { }

  ngOnInit(): void {

    this.animais$ = this.usuarioService.retornaUsuario().pipe(
      switchMap((usuario) => {
        const userName = usuario.name ?? '';
        return this.animaisService.listaDoUsuario(userName);
      })
    )

    //essa forma não seria um boa pratica
    // this.usuarioService.retornaUsuario().subscribe((usuario) => {
    //   const userName = usuario.name ?? '';
    //   this.animaisService.listaDoUsuario(userName).subscribe((animais) =>{
    //     this.animais = animais;
    //   })
    // })
  }

}
