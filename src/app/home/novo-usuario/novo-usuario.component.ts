import { UsuarioExisteService } from './usuario-existe.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { minusculoValidator } from './miusculo.validator';
import { NovoUsuario } from './novo-usuario';
import { NovoUsuarioService } from './novo-usuario.service';
import { usuarioSenhaIguaisValidator } from './usuario-senha-iguais.validator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']
})
export class NovoUsuarioComponent implements OnInit {

  novoUsuarioForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private novoUsusarioService: NovoUsuarioService,
    private usuarioExisteService: UsuarioExisteService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.novoUsuarioForm = this.formBuilder.group({
      //class ultilitaria do angular que faz validção dos campos verificando se seu formato e valido
      email: ['', [Validators.required, Validators.email]],
      fullName: ['', [Validators.required, Validators.minLength(4)]],
      userName: ['', [minusculoValidator], [this.usuarioExisteService.usuarioJaExiste()]],
      password: [''],
    },
      {
        validators: [usuarioSenhaIguaisValidator]
      }
    );
  }

  cadastrar() {
    if (this.novoUsuarioForm.valid) {
      const novoUsuario = this.novoUsuarioForm.getRawValue() as NovoUsuario;
      this.novoUsusarioService.cadastraNovoUsuario(novoUsuario).subscribe(() =>{
        this.router.navigate(['']);
      },
      (error)=>{
        console.log(error);
      }
      );
    }
    //console.log(novoUsuario);
  }

}
