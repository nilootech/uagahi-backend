import { IncomeTypesEnum } from '../../models/withdraw/enums/income-types.enum';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('Discount')
export class DiscountType {
  @Field(() => ID)
  _id: string;

  @Field()
  name: string;

  @Field()
  code: string;

  @Field(() => [IncomeTypesEnum])
  types: IncomeTypesEnum[];

  @Field()
  fromDate: Date;

  @Field()
  toDate: Date;

  @Field()
  active: boolean;
}
