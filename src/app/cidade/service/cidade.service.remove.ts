import { Injectable } from '@nestjs/common';
import { TabelaCidade } from './tabela.service';

@Injectable()
export class CidadeServiceRemove {
  private cidade = TabelaCidade;
  constructor() {}

  delete(id: number) {
    const cidadeIndex = this.cidade.findIndex((c) => c.idCidade === id);

    this.cidade.splice(cidadeIndex, 1);
    
    return this.cidade;
  }
}