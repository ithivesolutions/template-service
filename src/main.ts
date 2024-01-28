import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';

import { AppModule } from './app/app.module';
import { setupSwagger } from './app/app.utils';

import type {
  CorsConfig,
  NestConfig,
  SwaggerConfig,
} from './common/configs/config.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  const nestConfig = configService.get<NestConfig>('nest');
  const corsConfig = configService.get<CorsConfig>('cors');
  const swaggerConfig = configService.get<SwaggerConfig>('swagger');

  // Cors
  if (corsConfig.enabled) {
    app.enableCors();
  }

  /** Setup Swagger*/
  setupSwagger(app, swaggerConfig);

  const port = nestConfig.port;

  return {
    app,
    port,
  };
}

if (process.env.NODE_ENV !== 'test')
  bootstrap().then(
    (response: { app: INestApplication; port: number | undefined }) => {
      response.app.listen(response.port || 3000);
    },
  );
