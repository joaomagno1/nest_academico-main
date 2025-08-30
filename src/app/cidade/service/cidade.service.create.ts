import { Injectable } from '@nestjs/common';
import { ConverterCidade } from '../dto/conventer/cidade.dto.converter';
import { CidadeRequest } from '../dto/request/cidade.request';
import { TabelaCidade } from './tabela.service';

@Injectable()
export class CidadeServiceCreate {

  private cidades = TabelaCidade;

  constructor() {}

  create(cidadeRequest: CidadeRequest) {
    const cidade = ConverterCidade.toCidade(cidadeRequest);

    const newIdCidade = this.cidades.length + 1;

    const newCidade = {
      ...cidade;
      IdCidade: newIdCidade
    };

    this.cidades.push(newCidade);

    const cidadeResponse = ConverterCidade.toCidadeResponse(cidade);

    return cidadeResponse;
  }
}
