// import { INestApplication } from '@nestjs/common';
// import { ConfigService } from '@nestjs/config';
// import { NestFactory } from '@nestjs/core';
// import * as appUtils from './app/app.utils';

// jest.mock('./app/app.module', () => {
//   return {
//     AppModule: {},
//   };
// });

// describe('bootstrap', () => {
//   it('should create and configure the Nest application', async () => {
//     // eslint-disable-next-line @typescript-eslint/no-var-requires
//     const MainModule = require('./main');

//     const configServiceMock = {
//       get: jest.fn().mockReturnValue({ port: 3000, enabled: true }),
//     };
//     const appMock = {
//       get: jest.fn().mockReturnValue(configServiceMock),
//       use: jest.fn(),
//       enableCors: jest.fn(),
//       listen: jest.fn(),
//     } as unknown as INestApplication;

//     const appSpy = jest.spyOn(NestFactory, 'create').mockResolvedValue(appMock);

//     const setupSwaggerSpy = jest
//       .spyOn(appUtils, 'setupSwagger')
//       .mockImplementation(() => true);

//     const resultPromise = MainModule.bootstrap();

//     await expect(resultPromise).resolves.toEqual({
//       app: appMock,
//       port: 3000,
//     });

//     expect(appSpy).toHaveBeenCalled();
//     expect(appMock.get).toHaveBeenCalledWith(ConfigService);
//     expect(appMock.enableCors).toHaveBeenCalled();
//     expect(setupSwaggerSpy).toHaveBeenCalledWith(appMock, {});
//     expect(appMock.listen).toHaveBeenCalledWith(3000);
//   });
// });
