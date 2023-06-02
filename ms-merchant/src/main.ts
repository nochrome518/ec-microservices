import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { NotFoundExceptionFilter } from './utilities/filters/not-found.exception-filter';
import { RequestLoggingInterceptor } from './utilities/interceptors/request-logging.interceptor';
import { Transport } from '@nestjs/microservices'

async function bootstrap(){
	const app = await NestFactory.createMicroservice(AppModule, {
		transport: Transport.GRPC,
		options: {
		url: `localhost:9002`,
		package: 'merchants',
		protoPath: join(__dirname, 'protos/merchants.proto'),
		}
	});
	app.useGlobalFilters(new NotFoundExceptionFilter());
	app.useGlobalInterceptors(new RequestLoggingInterceptor());
	app.listen().then(()=>{
		console.log(`ms-merchants is running`);
	})
}
bootstrap();
