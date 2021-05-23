import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NovoUsuario } from './novo-usuario';
import { NovoUsuarioService } from './novo-usuario.service';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']
})
export class NovoUsuarioComponent implements OnInit {

  novoUsuarioForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private novoUsusarioService: NovoUsuarioService) { }

  ngOnInit(): void {
    this.novoUsuarioForm = this.formBuilder.group({
      //class ultilitaria do angular que faz validção dos campos verificando se seu formato e valido
      email: ['',[Validators.required, Validators.email]],
      fullName: [''],
      userName: [''],
      password: ['']
    });
  }

  cadastrar(){
    const novoUsuario = this.novoUsuarioForm.getRawValue() as NovoUsuario;
    console.log(novoUsuario);
  }

}
