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

    cidade.idCidade = newIdCidade;

    this.cidades.push(cidade);

    const cidadeResponse = ConverterCidade.toCidadeResponse(cidade);

    return cidadeResponse;
  }
}
