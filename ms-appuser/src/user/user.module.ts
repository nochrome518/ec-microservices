import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/models/entities/user.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserRepository } from './user.repository';
import { DatabaseModule } from 'src/provider/database.module';
@Module({
    imports: [DatabaseModule],
    controllers: [UserController],
    providers: [UserService,...UserRepository],
    exports: [UserService]
})
export class UserModule {}
