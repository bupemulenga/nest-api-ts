import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// Entry point of nest JS.
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
