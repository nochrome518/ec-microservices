import { Inject, Module, Options } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { UserModule } from 'src/user/user.module'
import { ConfigModule } from '@nestjs/config';
import applicationConfig from 'src/config/application.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [applicationConfig],
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      username: 'root',
      password: "Admin@123",
      database: 'ec_dev',
      autoLoadEntities : false,
      synchronize : false,
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
