import { Injectable } from '@nestjs/common';
import { TabelaCidade } from "./tabela.service";

@Injectable()
export class CidadeServiceFindall {
  constructor() {}

  findAll() {
    return TabelaCidade;
  }
}
