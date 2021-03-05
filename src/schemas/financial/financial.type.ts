import { FinancialTypeEnum } from './enums/financial-type.enum';
import { Field, ObjectType } from '@nestjs/graphql';
import { UserType } from '../user/user.type';
import { WithdrawModelType } from '../../models/withdraw/withdraw.model.type';
import { PaymentModelType } from '../../models/payment/payment.model.type';

@ObjectType('Financial')
export class FinancialType {
  @Field(() => FinancialTypeEnum)
  type: FinancialTypeEnum;

  @Field(() => PaymentModelType)
  payment: PaymentModelType;

  @Field(() => WithdrawModelType)
  withdraw: WithdrawModelType;

  @Field(() => UserType)
  user: UserType;
}
