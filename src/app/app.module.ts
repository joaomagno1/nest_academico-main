import { Module } from '@nestjs/common';
import { CidadeModule } from 'src/app/cidade/cidade.module';

@Module({
  imports: [
    CidadeModule,
  ],
})
export class AppModule {}
