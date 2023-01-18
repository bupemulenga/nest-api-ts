import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// Handle API requests and responses.
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
