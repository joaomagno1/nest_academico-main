import {
ExceptionFilter,
ArgumentsHost,
HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';

export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const req = ctx.getRequest<Request>();

    const status = exception.getStatus();
    const message = exception.message;

    return response.status(status).json({
      status,
      timestamp: new Date().toISOString(),
      message,
      path: req.path,
    });
  }
}
