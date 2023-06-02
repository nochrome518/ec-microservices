import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MerchantModule } from './merchant/merchant.module';
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { ConfigModule } from '@nestjs/config';
import applicationConfig from 'src/config/application.config';
require('dotenv').config();

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [applicationConfig],
      isGlobal: true,
      }),
      TypeOrmModule.forRoot({
        type: 'mysql',
        host:  process.env.TYPEORM_HOST,//'localhost',
        username:process.env.TYPEORM_USERNAME,// 'root',
        password:process.env.TYPEORM_PASSWORD,// 'Admin@123',
        database: process.env.TYPEORM_DATABASE,//'ec_dev',
        synchronize : false,
      }),
    MerchantModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
