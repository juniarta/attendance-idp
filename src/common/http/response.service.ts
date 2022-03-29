import { Injectable, HttpException } from '@nestjs/common';

@Injectable()
export class ResponseService {
  responseSuccess(statusCode: number, data: any): string {
    const response: any = { status: statusCode, data: data };
    return response;
  }

  responseError(message: any, code: string, statusCode: number): string {
    const error: any = new Error();
    error.message = message;
    error.status = statusCode;
    error.code = code;
    throw new HttpException({ error }, statusCode);
  }
}
