import { UserService } from './user.service';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserType } from './user.type';
import { CreateUserInput } from './inputs/create-user.input';
import { Roles } from '../../auth/role/role.decorator';
import { Role } from '../../auth/role/role.enum';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../../auth/guard/auth-guard.service';

@Resolver(() => UserType)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => [UserType])
  @UseGuards(GqlAuthGuard)
  @Roles(Role.Admin)
  users() {
    return this.userService.findAll();
  }

  @Mutation(() => UserType)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.userService.signUp(createUserInput);
  }
}
