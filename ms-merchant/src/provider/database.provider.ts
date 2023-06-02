import { DataSource } from 'typeorm';
require('dotenv').config();

export const databaseProviders = [
	{
		provide: 'DATA_SOURCE',
		useFactory: async () => {
		const dataSource = new DataSource({
			type: 'mysql',
			host:  process.env.TYPEORM_HOST,//'localhost',
			port:  Number(process.env.TYPEORM_PORT),
			username:process.env.TYPEORM_USERNAME,// 'root',
			password:process.env.TYPEORM_PASSWORD,// 'Admin@123',
			database: process.env.TYPEORM_DATABASE,//'ec_dev',
			entities: [
				__dirname + '/../**/*.entity{.ts,.js}',
			],
			synchronize: false,
		});

		return dataSource.initialize();
		},
	},
];