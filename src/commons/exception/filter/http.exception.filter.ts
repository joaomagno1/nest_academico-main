export class httpExceptionFilter implements ExceptionFilter {
  catch(exception: httpException, host: ArgumentsHost){
    const ctx = host.switchToHttp();
    const req = ctx.getRequest<Request>();

    const status = exception.getStatus();
    const message = exception.message;
    //const erro = exception.error;
  
    return response(status).json({
        status,
        timestamp: new Date().toISOString(),
        message,
        path: req.path,
      });
    }
  }
}