import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Product } from 'src/models/entities/product.entity';
import { Repository } from 'typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { SearchProductBy, searchProductReportBy } from 'src/models/requests/search-product.request';
import { Messages } from 'src/constants/messages';
import { SearchProductResponse } from 'src/models/responses/search-product.response';

@Injectable()
export class ProductService extends TypeOrmCrudService<Product> {
    constructor(
        @Inject('PRODUCT_REPOSITORY')
        private productRepository: Repository<Product>,
      ) {
        super(productRepository);
    }

    async createProduct(createProductRequest: Product): Promise<Product>{
        const user = await this.productRepository.save(createProductRequest);
        return user;
    }

    async searchProduct(searchProductRequest: SearchProductBy): Promise<any>{
        let where = {} as any;
        Object.assign(where,searchProductRequest);
        let productData = await this.productRepository.find({where});
        if(!productData){
            throw new NotFoundException(Messages.NO_DATA_FOUND);
        }

        const response: SearchProductResponse = {
            products: productData
        } 
        return response;
    }

    async updateProduct(updateProductRequest: Product): Promise<Product>{
        let where = {} as any;
        where.id = updateProductRequest.id;
        let productFound = await this.productRepository.findOne({where});
        if(!productFound){
            throw new NotFoundException(Messages.INVALID_PRODUCT);
        }

        updateProductRequest = this.productRepository.merge(productFound, updateProductRequest);
        const product = await this.productRepository.save(updateProductRequest);
        return product;
    }

    async deleteProduct(id: number, deleteProductRequest: Product): Promise<Product> {
        let where = {} as any;
        where.id = id
        const productFound = await this.productRepository.findOne({where});
        if (productFound == null) {
            throw new NotFoundException(`Product not found`);
        }
        deleteProductRequest = this.productRepository.merge(productFound, deleteProductRequest);
        return this.productRepository.save(deleteProductRequest);
    }

    async getProductReport(productReportRequest: searchProductReportBy): Promise<any> {
        let where: any = {};
        where = Object.assign(where, productReportRequest);
        delete where.skip;
        delete where.take;
    
        if (productReportRequest.status) {
          where['status'] = productReportRequest.status.toString()
        }
        const [result, total] = await this.productRepository.findAndCount({
          where: where,
          take: productReportRequest.take,
          skip: productReportRequest.skip,
          order: { createdDate: 'DESC' }
        });
        return {
          data: { products: result },
          total: total,
          count: result.length
        }
    }
}
