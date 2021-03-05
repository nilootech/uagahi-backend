import { Field, InputType } from '@nestjs/graphql';
import { UserType } from '../../schemas/user/user.type';
import { MaxLength } from 'class-validator';

@InputType()
export class ReportModelInput {
  @Field()
  user: UserType;

  @Field()
  @MaxLength(500)
  description: string;
}
