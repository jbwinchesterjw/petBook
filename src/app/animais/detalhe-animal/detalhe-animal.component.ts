import { Animal } from './../animais';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimaisService } from '../animais.service';

@Component({
  selector: 'app-detalhe-animal',
  templateUrl: './detalhe-animal.component.html',
  styleUrls: ['./detalhe-animal.component.css']
})
export class DetalheAnimalComponent implements OnInit {

  animalId!: number;
  animal$!: Observable<Animal>;
  constructor(private animaisService: AnimaisService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.animalId = this.activatedRoute.snapshot.params.animalIdRota;
    this.animal$ = this.animaisService.buscarPorId(this.animalId);
  }

}
