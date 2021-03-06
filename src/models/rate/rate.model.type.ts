import { UserType } from '../../schemas/user/user.type';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('RateModel')
export class RateModelType {
  @Field()
  rate: number;

  @Field(() => UserType)
  user: UserType;
}
