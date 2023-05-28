import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class RequestLoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = `${context.getClass().name}.${context.getHandler().name}`;

    const now = Date.now();
    return next
      .handle()
      .pipe(
        tap(() => console.log(`${request} - ${Date.now() - now}ms`)),
      );
  }
}