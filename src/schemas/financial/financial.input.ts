import { Field, InputType } from '@nestjs/graphql';
import { FinancialTypeEnum } from './enums/financial-type.enum';
import { IsEnum } from 'class-validator';
import { WithdrawModelInput } from '../../models/withdraw/withdraw.model.input';
import { PaymentModelInput } from '../../models/payment/payment.model.input';

@InputType()
export class FinancialInput {
  @Field()
  @IsEnum(FinancialTypeEnum)
  type: FinancialTypeEnum;

  @Field()
  payment: PaymentModelInput;

  @Field()
  withdraw: WithdrawModelInput;

  @Field()
  user: string;
}
