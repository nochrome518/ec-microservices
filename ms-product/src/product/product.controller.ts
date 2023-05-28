import { Body, Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { Product } from 'src/models/entities/product.entity';
import { ProductService } from './product.service';
import { SearchProductBy, searchProductReportBy } from 'src/models/requests/search-product.request';

@Controller('product')
export class ProductController {
    constructor(private productService: ProductService){}

    @GrpcMethod('ProductsService', 'getAll')
    getAllProduct(@Body() searchProductRequest: SearchProductBy): Promise<Product> {
      	return this.productService.searchProduct(searchProductRequest);
    }
    
    @GrpcMethod('ProductsService', 'createProduct')
    createProduct(@Body() createProductequest: Product): Promise<Product> {
      	return this.productService.createProduct(createProductequest);
    }

    @GrpcMethod('ProductsService', 'searchProduct')
    searchProduct(@Body() searchProductRequest: SearchProductBy): Promise<any> {
      	return this.productService.searchProduct(searchProductRequest);
    }

    @GrpcMethod('ProductsService', 'updateProduct')
    updateProduct(@Body() updateProductRequest: Product): Promise<Product> {
      	return this.productService.updateProduct(updateProductRequest);
    }

	@GrpcMethod('ProductsService', 'deleteProduct')
    deleteProduct(@Body() deleteProductRequest: Product): Promise<Product> {
      	return this.productService.deleteProduct(deleteProductRequest.id, deleteProductRequest);
    }

	@GrpcMethod('ProductsService', 'getProductReport')
    getProductReport(@Body() productReportRequest: searchProductReportBy): Promise<Product> {
      	return this.productService.getProductReport(productReportRequest);
    }

}
