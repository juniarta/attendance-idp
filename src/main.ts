import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import * as bodyParser from 'body-parser';
import {
  HttpException,
  HttpStatus,
  ValidationError,
  ValidationPipe,
} from '@nestjs/common';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.useGlobalPipes(
    new ValidationPipe({
      exceptionFactory: (errors: ValidationError[]) => {
        const error: any = new Error();
        error.message = errors.map((err) => {
          return err.constraints[Object.keys(err.constraints)[0]];
        });
        error.status = HttpStatus.BAD_REQUEST;
        error.code = 'BAD_REQUEST';
        throw new HttpException({ error }, HttpStatus.BAD_REQUEST);
      },
    }),
  );

  await app.listen(parseInt(process.env.PORT));
}
bootstrap();
