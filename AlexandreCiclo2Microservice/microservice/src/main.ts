import { NestFactory } from '@nestjs/core';
import { OrdemModule } from './ordem/ordem.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(OrdemModule);

  app.connectMicroservice({
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://localhost:5672'],  // URL do RabbitMQ
      queue: 'ordemQueue',  // Nome da fila
      queueOptions: {
        durable: false,  // Garantir que a fila não seja durável
      },
    },
  });

  await app.startAllMicroservices();  // Inicia a escuta do microserviço
  await app.listen(3001);  // Porta onde o microserviço vai rodar
}

bootstrap();
