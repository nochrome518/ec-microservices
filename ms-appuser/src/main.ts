import { NestFactory } from '@nestjs/core';
import { join } from 'path';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices'

async function bootstrap(){
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.GRPC,
    options: {
      url: `localhost:9000`,
      package: 'users',
      protoPath: join(__dirname, 'protos/users.proto'),
    }
  });

  app.listen().then(()=>{
    console.log(`ms-appusers is running`);
  })
}
bootstrap();
