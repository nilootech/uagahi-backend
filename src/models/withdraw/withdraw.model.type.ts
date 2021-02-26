import { IncomeTypesEnum } from './enums/income-types.enum';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('WithdrawModel')
export class WithdrawModelType {
  @Field(() => ID)
  _id: string;

  @Field(() => IncomeTypesEnum)
  type: IncomeTypesEnum;

  @Field()
  refId: string;

  @Field()
  amount: number;

  @Field()
  date: Date;
}
