import { Injectable } from '@nestjs/common';
import { TabelaCidade } from './tabela.service';

@Injectable()
export class CidadeServiceFindOne {

  private cidades = TabelaCidade;
  constructor() {}
  findOne(id: number){
    return this.cidades.find(c => c.idCidade === id);
  }
}
