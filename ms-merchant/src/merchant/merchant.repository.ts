import { Merchant } from "src/models/entities/merchant.entity";
import { DataSource } from 'typeorm';

export const MerchantRepository = [
	{
		provide: 'MERCHANT_REPOSITORY',
		useFactory: (dataSource: DataSource) => dataSource.getRepository(Merchant),
		inject: ['DATA_SOURCE'],
	},
];