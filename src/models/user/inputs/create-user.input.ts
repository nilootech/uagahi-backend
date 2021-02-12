import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, MinLength } from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field()
  @MinLength(1)
  name: string;

  @Field()
  @MinLength(5)
  password: string;

  @Field({ nullable: true })
  birthDate: Date;

  @Field()
  @IsEmail()
  email: string;
}
