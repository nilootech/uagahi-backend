import { registerEnumType } from '@nestjs/graphql';

export enum FinancialTypeEnum {
  PAYMENT = 'PAYMENT',
  WITHDRAW = 'WITHDRAW',
}

registerEnumType(FinancialTypeEnum, {
  name: 'FinancialTypeEnum',
});
