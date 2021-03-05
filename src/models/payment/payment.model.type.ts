import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('PaymentModel')
export class PaymentModelType {
  @Field(() => ID)
  _id: string;

  @Field()
  amount: number;

  @Field()
  date: Date;

  @Field()
  bank: string;

  @Field()
  traceCode: string;
}
