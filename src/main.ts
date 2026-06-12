import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const port = process.env.GRPC_PORT ?? '50053';
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.GRPC,
    options: {
      package: 'media',
      protoPath: join(process.cwd(), '..', 'grpc-contracts', 'media.proto'),
      url: `0.0.0.0:${port}`,
    },
  });
  await app.listen();
  console.log(`Media gRPC Service listening on ${port}`);
}
bootstrap();
