import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NEST_PORT } from './constants/main';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(NEST_PORT);
}
bootstrap();
