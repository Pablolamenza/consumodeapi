import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getRamdomString(): String {
    return (Math.random() + 1).toString(36).substring(7);
    
  }
}
