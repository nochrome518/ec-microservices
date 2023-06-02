import { Module } from '@nestjs/common';
import { MerchantController } from './merchant.controller';
import { MerchantService } from './merchant.service';
import { DatabaseModule } from 'src/provider/database.module';
import { MerchantRepository } from './merchant.repository';

@Module({
  imports: [DatabaseModule],
  controllers: [MerchantController],
  providers: [MerchantService,...MerchantRepository]
})
export class MerchantModule {}
