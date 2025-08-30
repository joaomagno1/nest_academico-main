import { Controller, Get, HttpCode, HttpStatus, Param } from '@nestjs/common';
import { CidadeServiceFindOne } from '../service/cidade.service.findone';

@Controller('/cidade')
export class CidadeControllerFindone {
  constructor(private readonly cidadeServiceFindOne: CidadeServiceFindOne) {}
  @HttpCode(HttpStatus.OK)
  @Get('/listar/:id')
  findOne(@Param('id') id: string){
    
    return this.cidadeServiceFindOne.findOne(+id);
  }
}
