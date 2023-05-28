import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { DatabaseModule } from 'src/provider/database.module';
import { ProductRepository } from './product.repository';

@Module({
  imports: [DatabaseModule],
  controllers: [ProductController],
  providers: [ProductService,...ProductRepository]
})
export class ProductModule {}
