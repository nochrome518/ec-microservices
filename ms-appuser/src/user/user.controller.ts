import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { User } from 'src/models/entities/user.entity';
import { UserService } from './user.service';
import { SearchUserBy } from 'src/models/requests/search-user.request';

@Controller('user')
export class UserController {
    constructor(private userService: UserService){}
    
    @GrpcMethod('UsersService', 'createUser')
    createUser(@Body() createUserRequest: User): Promise<User> {
      	return this.userService.createUser(createUserRequest);
    }

    @GrpcMethod('UsersService', 'searchUser')
    searchUser(@Body() searchUserRequest: SearchUserBy): Promise<any> {
      	return this.userService.searchUser(searchUserRequest);
    }

    @GrpcMethod('UsersService', 'updateUser')
    updateUser(@Body() updateUserRequest: User): Promise<User> {
      	return this.userService.updateUser(updateUserRequest);
    }

}
