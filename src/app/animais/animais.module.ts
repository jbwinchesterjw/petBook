import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimaisRoutingModule } from './animais-routing.module';
import { ListaAnimaisComponent } from './lista-animais/lista-animais.component';
import { AnimalComponent } from './animal/animal.component';
import { CartaoModule } from '../componentes/cartao/cartao.module';
import { GradeFotosAnimaisComponent } from './grade-fotos-animais/grade-fotos-animais.component';
import { DetalheAnimalComponent } from './detalhe-animal/detalhe-animal.component';
import { MensagemModule } from '../componentes/mensagem/mensagem.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ComentarioComponent } from './detalhe-animal/comentario/comentario.component';


@NgModule({
  declarations: [
    ListaAnimaisComponent,
    AnimalComponent,
    GradeFotosAnimaisComponent,
    DetalheAnimalComponent,
    ComentarioComponent
  ],
  imports: [
    CommonModule,
    AnimaisRoutingModule,
    CartaoModule,
    MensagemModule,
    ReactiveFormsModule
  ],
})
export class AnimaisModule { }
