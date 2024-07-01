import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import { PrismaService } from './db/db.service';
import { AppModule } from './app.module';
import { ErrorCatch } from './common/filters/error-catch.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const prismaService = app.get(PrismaService);

  // http validation
  app.useGlobalPipes(new ValidationPipe());
  // custom error catch
  app.useGlobalFilters(new ErrorCatch());

  // Server port
  const serverPort = configService.get<string>('SERVER_PORT') || 3001;
  await app.listen(serverPort);
  console.log(`Server is running on: http://localhost:${serverPort}`);
  // check DB connection
  prismaService.db();
}
bootstrap();
