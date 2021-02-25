import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsString, MaxLength } from 'class-validator';

@InputType()
export class ContactModelInput {
  @Field()
  @IsString({ each: true })
  @MaxLength(11, { each: true })
  tels: string[];

  @Field()
  @MaxLength(11, { each: true })
  mobiles: string[];

  @Field()
  @IsEmail()
  email: string;
}
