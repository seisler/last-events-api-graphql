import * as dotenv from 'dotenv';
import { join } from 'path';

// import environment variables
if (process.env.NODE_ENV === 'development') {
  dotenv.config({path: join(process.cwd(), `${process.env.NODE_ENV}.env`)});
}

import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(80);
}

bootstrap().then(() => console.log('Application is listening on port 3000.'));
