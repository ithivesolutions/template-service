import { Controller, HttpStatus, Get, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { DemoService } from '../services/demo.service';

@ApiTags('Demo')
@Controller()
export class DemoController {
  constructor(private readonly demoService: DemoService) {}

  @Get('hello/:name')
  @ApiOperation({
    summary: 'Print your input string',
  })
  @ApiResponse({
    status: HttpStatus.OK,
  })
  getHelloName(@Param('name') name: string): string {
    return this.demoService.getHelloName(name);
  }
}
