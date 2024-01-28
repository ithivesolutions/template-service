import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { DemoModule } from '../demo/demo.module';

import { SharedModule } from '../common/shared.module';

@Module({
  imports: [SharedModule, DemoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
