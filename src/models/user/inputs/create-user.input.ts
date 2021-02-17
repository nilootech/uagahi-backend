import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, MinLength } from 'class-validator';
import { AccountUserInput } from '../../account/account.input';

@InputType()
export class CreateUserInput {
  @Field()
  @MinLength(1)
  name: string;

  @Field()
  @MinLength(5)
  password: string;

  @Field()
  birthDate: Date;

  @Field()
  @IsEmail()
  email: string;

  @Field()
  account: AccountUserInput;
}
