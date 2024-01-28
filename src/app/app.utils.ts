import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import type { SwaggerConfig } from '../common/configs/config.interface';

export const setupSwagger = (
  app: INestApplication,
  swaggerConfig: SwaggerConfig,
) => {
  const options = new DocumentBuilder()
    .setTitle(swaggerConfig.title)
    .setDescription(swaggerConfig.description)
    .setVersion(swaggerConfig.version || '1.0')
    .build();

  const document = SwaggerModule.createDocument(app, options, {
    deepScanRoutes: false,
  });
  SwaggerModule.setup(swaggerConfig.path, app, document);
};
