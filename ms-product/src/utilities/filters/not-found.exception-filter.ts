import { ArgumentsHost, Catch, RpcExceptionFilter, NotFoundException } from "@nestjs/common";
import { Observable, throwError } from "rxjs";
import { RpcException } from "@nestjs/microservices";

@Catch(NotFoundException)
export class NotFoundExceptionFilter implements RpcExceptionFilter<NotFoundException> {

    catch(exception: NotFoundException, host: ArgumentsHost): Observable<any> {
        console.log(exception);
        return throwError(new RpcException(exception.getResponse()));
    }

}