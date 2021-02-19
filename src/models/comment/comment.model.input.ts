import { Field, InputType } from '@nestjs/graphql';
import {
  IsBoolean,
  IsEmail,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

@InputType()
export class CommentModelInput {
  @Field()
  @IsEmail()
  email: string;

  @Field()
  @MaxLength(11)
  mobile: string;

  @Field()
  @MinLength(3)
  name: string;

  @Field()
  @MaxLength(500)
  comment: string;

  @Field()
  @IsBoolean()
  active: boolean;

  @Field()
  @IsString()
  @MaxLength(500)
  reply: string;
}
