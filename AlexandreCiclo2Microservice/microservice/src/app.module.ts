// src/app.module.ts
import { Module } from '@nestjs/common';
import { OrdemModule } from './ordem/ordem.module';

@Module({
  imports: [OrdemModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
