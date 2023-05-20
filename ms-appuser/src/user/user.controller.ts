import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { User } from 'src/models/entities/user.entity';
import { CreateUserRequest } from 'src/models/requests/create-user.request';
import { UserLoginRequest } from 'src/models/requests/user-login.request';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService){}
    
    @GrpcMethod('UsersService', 'createUser')
    createUser(@Body() createUserRequest: CreateUserRequest): Promise<User> {
      return this.userService.createUser(createUserRequest);
    }

    // @GrpcMethod('UsersService', 'createBranch')('login')
    // userLoginWithEmail(@Body() userLoginRequest: UserLoginRequest): Promise<any> {
    //   return this.userService.userLogin(userLoginRequest);
    // }

}
