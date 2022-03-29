import { HttpStatus, Injectable } from '@nestjs/common';
import { ResponseService } from './common/http/response.service';
@Injectable()
export class AppService {
  constructor(private readonly responService: ResponseService) {}

  getHello(): string {
    return 'Hello World!';
  }

  async ping(): Promise<any> {
    return this.responService.responseSuccess(HttpStatus.OK, 'pong');
  }
}
