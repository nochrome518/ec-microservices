import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { User } from 'src/models/entities/user.entity';
import { UserRepository } from './user.repository';
import { SearchUserBy } from 'src/models/requests/search-user.request';
import { Messages } from 'src/constants/messages';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { SearchUsersResponse } from 'src/models/responses/search-user.response';

@Injectable()
export class UserService extends TypeOrmCrudService<User> {
    constructor(
        @Inject('USER_REPOSITORY')
        private userRepository: Repository<User>,
      ) {
        super(userRepository);
    }

    async createUser(createUserRequest: User): Promise<User>{
        let where = {} as any;
        where.email = createUserRequest.email;
        let userFound = await this.userRepository.findOne({where});
        if(userFound){
            throw new NotFoundException(Messages.EMAIL_ALREADY_EXIST);
        }

        const user = await this.userRepository.save(createUserRequest);
        return user;
    }

    async searchUser(searchUserRequest: SearchUserBy): Promise<any>{
        let where = {} as any;
        Object.assign(where,searchUserRequest);
        let usersFound = await this.userRepository.find({where});
        if(!usersFound){
            throw new NotFoundException(Messages.NO_DATA_FOUND);
        }

        const response: SearchUsersResponse = {
            users: usersFound
        } 
        return response;
    }

    async updateUser(updateUserRequest: User): Promise<User>{
        let where = {} as any;
        where.id = updateUserRequest.id;
        let userFound = await this.userRepository.findOne({where});
        if(!userFound){
            throw new NotFoundException(Messages.INVALID_USER);
        }

        updateUserRequest = this.userRepository.merge(userFound, updateUserRequest);
        const user = await this.userRepository.save(updateUserRequest);
        return user;
    }

}
