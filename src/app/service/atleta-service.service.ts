import { Injectable } from '@angular/core';
import { Atleta } from '../models/Atleta';

@Injectable({
  providedIn: 'root'
})
export class AtletaServiceService {
  //declarando ARRAY atletas
  private atletas: Atleta[] = []

  //declaraçao das funcoes de manipulaçao do array
  // add elemento
  adicionarAtleta(atleta: Atleta){
    //armengu para gerar id
    atleta.id = this.atletas.length + 1
    this.atletas.push(atleta)
  }
  listarAtletas(){
    console.table(this.atletas)
    return this.atletas
  }
// remover elementos
  removerElemento(idAtleta:number){
    this.atletas=this.atletas.filter(elem=>elem.id !== idAtleta)
  }
  //remover elmento2
  removerElemento2(atleta:Atleta){
    let posArray =this.atletas.findIndex(elem=>elem.id !== atleta.id)
    this.atletas.splice(1,posArray)
  }
  //alterando elemento do array
  alterarElemento(atleta:Atleta){
    let posArray = this.atletas.findIndex(elem=>elem.id !== atleta.id)
    this.atletas[posArray] = atleta
  }

  constructor() { }
}
