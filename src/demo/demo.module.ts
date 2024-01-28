import { Module } from '@nestjs/common';
import { SharedModule } from '../common/shared.module';

import { DemoController } from './controller/demo.controller';
import { DemoService } from './services/demo.service';

@Module({
  imports: [SharedModule],
  controllers: [DemoController],
  providers: [DemoService],
  exports: [DemoService],
})
export class DemoModule {}
