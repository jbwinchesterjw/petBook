import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AutenticacaoInterceptor } from './autenticacao.interceptor';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,//provide e quando quero criar um serviço do tipo httpIntercepitor
      useClass: AutenticacaoInterceptor,
      multi: true//deixar true caso queira ter uma cadeia de intercepitor
    }
  ]
})
export class AutenticacaoModule { }
