import { ComentarioService } from './comentario.service';
import { Observable } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { Comentario } from './comentario';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.css']
})
export class ComentarioComponent implements OnInit {
  @Input() id!: number;
  comentario$!: Observable<Comentario>;
  comentarioForm!: FormGroup;

  constructor(private comentarioService: ComentarioService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.comentario$ = this.comentarioService.buscarComentario(this.id);
    this.comentarioForm = this.formBuilder.group({
      comentario:['', Validators.maxLength(300)],
    });
  }
//converte o fluxo
  gravarComentarios():void{
    const comentario = this.comentarioForm.get('comentario')?.value ??'';
    this.comentario$ = this.comentarioService.incluirComentario(this.id, comentario).pipe(
      switchMap(() =>this.comentarioService.buscarComentario(this.id)),
      tap(()=>{
        this.comentarioForm.reset();
        alert('Comentário Salvo Com Sucesso !');
      })
    );
  }
}
