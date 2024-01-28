import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { SwaggerModule } from '@nestjs/swagger';
import { setupSwagger } from './app.utils';

jest.mock('@nestjs/swagger', () => ({
  ...jest.requireActual('@nestjs/swagger'),
  SwaggerModule: {
    createDocument: jest.fn(),
    setup: jest.fn(),
  },
}));

describe('setupSwagger', () => {
  let app: INestApplication;
  const swaggerConfigMock = {
    enabled: true,
    title: 'Mock API',
    description: 'Mock API Desc',
    version: '1.0',
    path: 'docs',
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [],
    }).compile();

    app = module.createNestApplication();
    await app.init();
  });

  it('should set up Swagger with the provided configuration', () => {
    setupSwagger(app, swaggerConfigMock);

    expect(SwaggerModule.createDocument).toHaveBeenCalled();
    expect(SwaggerModule.setup).toHaveBeenCalled();
  });
});
