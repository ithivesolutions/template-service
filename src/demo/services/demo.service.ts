import { Injectable } from '@nestjs/common';

@Injectable()
export class DemoService {
  getHelloName(name: string): string {
    return `Hello ${name}!`;
  }
}
