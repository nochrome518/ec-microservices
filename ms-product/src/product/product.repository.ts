import { Product } from "src/models/entities/product.entity";
import { DataSource } from 'typeorm';

export const ProductRepository = [
	{
		provide: 'PRODUCT_REPOSITORY',
		useFactory: (dataSource: DataSource) => dataSource.getRepository(Product),
		inject: ['DATA_SOURCE'],
	},
];