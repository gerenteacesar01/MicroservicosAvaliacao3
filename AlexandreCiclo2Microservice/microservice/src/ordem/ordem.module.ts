// src/ordem/ordem.module.ts
import { Module } from '@nestjs/common';
import { OrdemController } from './ordem.controller';
import { OrdemService } from './ordem.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [OrdemController],
  providers: [OrdemService, PrismaService],
})
export class OrdemModule {}
