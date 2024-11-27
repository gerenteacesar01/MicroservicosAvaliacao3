// src/ordem/ordem.controller.ts
import { Controller, Post, Get, Body } from '@nestjs/common';
import { OrdemService } from './ordem.service';

// DTO para validar os dados de entrada (criação de ordem)
class CreateOrdemDto {
  descricao: string;
  status: string;
}

@Controller('ordem')
export class OrdemController {
  constructor(private readonly ordemService: OrdemService) {}

  // Endpoint para criar uma ordem
  @Post()
  async create(@Body() createOrdemDto: CreateOrdemDto) {
    try {
      return await this.ordemService.createOrder(createOrdemDto.descricao, createOrdemDto.status);
    } catch (error) {
      console.error('Erro ao criar a ordem:', error);
      throw error;
    }
  }

  // Endpoint para obter todas as ordens
  @Get()
  async findAll() {
    return this.ordemService.getAllOrders();
  }
}
