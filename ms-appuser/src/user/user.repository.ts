import { User } from "src/models/entities/user.entity";
import { DataSource } from 'typeorm';

export const UserRepository = [
	{
		provide: 'USER_REPOSITORY',
		useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
		inject: ['DATA_SOURCE'],
	},
];