import { Injectable } from '@nestjs/common';

// Business Logic for the project.
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
