import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType('AccountModel')
export class AccountModelType {
  @Field(() => ID)
  _id: string;

  @Field()
  name: string;

  @Field(() => Int)
  countTicketPerDay: number;

  @Field()
  active: boolean;

  @Field()
  fromDate: Date;

  @Field()
  toDate: Date;
}
