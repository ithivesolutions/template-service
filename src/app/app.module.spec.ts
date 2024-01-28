import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from './app.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DemoModule } from '../demo/demo.module';
import { SharedModule } from '../common/shared.module';

describe('AppModule', () => {
  let appModule: TestingModule;

  beforeEach(async () => {
    appModule = await Test.createTestingModule({
      imports: [SharedModule, DemoModule],
      controllers: [AppController],
      providers: [AppService],
    }).compile();
  });

  it('should be defined', () => {
    expect(appModule).toBeDefined();
  });

  it('should have the AppController', () => {
    const controller = appModule.get<AppController>(AppController);
    expect(controller).toBeDefined();
  });

  it('should have the AppService', () => {
    const service = appModule.get<AppService>(AppService);
    expect(service).toBeDefined();
  });

  it('should have DemoModule in imports', () => {
    const imports = Reflect.getMetadata('imports', AppModule) as any[];
    expect(imports).toContain(DemoModule);
  });

  it('should have SharedModule in imports', () => {
    const imports = Reflect.getMetadata('imports', AppModule) as any[];
    expect(imports).toContain(SharedModule);
  });

  it('should have AppController in controllers', () => {
    const controllers = Reflect.getMetadata('controllers', AppModule) as any[];
    expect(controllers).toContain(AppController);
  });

  it('should have AppService in providers', () => {
    const providers = Reflect.getMetadata('providers', AppModule) as any[];
    expect(providers).toContain(AppService);
  });
});
