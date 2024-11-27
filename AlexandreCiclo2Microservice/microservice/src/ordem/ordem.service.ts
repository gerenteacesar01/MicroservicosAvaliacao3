// src/ordem/ordem.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class OrdemService {
  constructor(private prisma: PrismaService) {}

  // Criar uma ordem
  async createOrder(descricao: string, status: string) {
    try {
      const ordem = await this.prisma.ordem.create({
        data: {
          descricao,
          status,
        },
      });
      return ordem;
    } catch (error) {
      console.error('Erro ao criar a ordem:', error);
      throw error;
    }
  }

  // Obter todas as ordens
  async getAllOrders() {
    try {
      return await this.prisma.ordem.findMany();
    } catch (error) {
      console.error('Erro ao buscar ordens:', error);
      throw error;
    }
  }
}
