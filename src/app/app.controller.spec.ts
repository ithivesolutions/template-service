import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
    appService = app.get<AppService>(AppService);
  });

  it('should be defined', () => {
    expect(appController).toBeDefined();
  });

  describe('getStatus', () => {
    it('should return the result from AppService.getStatus', () => {
      const expectedResult = 'OK';
      jest.spyOn(appService, 'getStatus').mockReturnValueOnce(expectedResult);

      const result = appController.getStatus();

      expect(result).toBe(expectedResult);
      expect(appService.getStatus).toHaveBeenCalled();
    });
  });
});
