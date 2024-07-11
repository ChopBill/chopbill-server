import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { ErrorHandler } from './error-handler';
import { ZodError } from 'zod';

@Catch(HttpException, ErrorHandler, ZodError)
export class ErrorCatch implements ExceptionFilter {
  catch(exception: HttpException | ErrorHandler | ZodError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    let status: number;
    let message: any;

    if (exception instanceof ErrorHandler) {
      status = exception.status || HttpStatus.INTERNAL_SERVER_ERROR;
      message = Array.isArray(exception.message)
        ? exception.message.join(' | ')
        : exception.message;
    } else if (exception instanceof ZodError) {
      status = HttpStatus.BAD_REQUEST;
      message = {
        success: false,
        message: exception.errors.map((err) => err.message).join(' | '),
      };
    } else {
      status =
        exception instanceof HttpException
          ? exception.getStatus()
          : HttpStatus.INTERNAL_SERVER_ERROR;
      message = exception.getResponse();
    }

    response.status(status).json({
      success: false,
      message:
        typeof message === 'string'
          ? message
          : message.message || message.error || 'Internal server error',
    });
  }
}
