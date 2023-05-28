import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NotFoundExceptionFilter } from './utilities/filters/not-found.exception-filter';
import { RequestLoggingInterceptor } from './utilities/interceptors/request-logging.interceptor';
import { Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap(){
	const app = await NestFactory.createMicroservice(AppModule, {
		transport: Transport.GRPC,
		options: {
		url: `localhost:9001`,
		package: 'products',
		protoPath: join(__dirname, 'protos/products.proto'),
		}
	});
	app.useGlobalFilters(new NotFoundExceptionFilter());
	app.useGlobalInterceptors(new RequestLoggingInterceptor());
	app.listen().then(()=>{
		console.log(`ms-products is running`);
	})
}
bootstrap();
