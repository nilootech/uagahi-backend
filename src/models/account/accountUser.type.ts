import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType('AccountUser')
export class AccountUserType {
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
