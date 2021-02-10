import { Field, InputType } from '@nestjs/graphql';
import { IsAlphanumeric, MinLength } from 'class-validator';

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
  @MinLength(5)
  userName: string;
}