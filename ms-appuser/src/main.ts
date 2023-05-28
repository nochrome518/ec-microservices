import { NestFactory } from '@nestjs/core';
import { join } from 'path';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices'
import { NotFoundExceptionFilter } from './utilities/filters/not-found.exception-filter';
import { RequestLoggingInterceptor } from './utilities/interceptors/request-logging.interceptor';

async function bootstrap(){
    const app = await NestFactory.createMicroservice(AppModule, {
        transport: Transport.GRPC,
        options: {
        url: `localhost:9000`,
        package: 'users',
        protoPath: join(__dirname, 'protos/users.proto'),
        }
    });
    app.useGlobalFilters(new NotFoundExceptionFilter());
    app.useGlobalInterceptors(new RequestLoggingInterceptor());
    app.listen().then(()=>{
        console.log(`ms-appusers is running`);
    })
}
bootstrap();
