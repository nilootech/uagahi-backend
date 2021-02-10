import { UserService } from '../models/user/user.service';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserType } from '../models/user/user.type';
import { CreateUserInput } from '../models/user/inputs/create-user.input';

@Resolver(() => UserType)
export class UserResolver {

  constructor(private userService: UserService) {
  }

  @Query(() => [UserType])
  users() {
    return this.userService.findAll();
  }

  @Mutation(() => UserType)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.userService.signUp(createUserInput);
  }

}