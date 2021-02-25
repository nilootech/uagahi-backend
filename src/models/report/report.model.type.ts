import { Field, ID, ObjectType } from '@nestjs/graphql';
import { UserType } from '../../schemas/user/user.type';

@ObjectType('ReportModel')
export class ReportModelType {
  @Field(() => ID)
  _id: string;

  @Field()
  user: UserType;

  @Field()
  description: string;
}
