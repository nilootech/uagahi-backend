import { registerEnumType } from '@nestjs/graphql';

export enum IncomeTypesEnum {
  INSTAGRAM = 'INSTAGRAM',
  TICKET = 'TICKET',
  VIDEO = 'VIDEO',
  TELEGRAM = 'TELEGRAM',
  FOLLOW_CATEGORY = 'FOLLOW_CATEGORY',
}

registerEnumType(IncomeTypesEnum, {
  name: 'IncomeTypesEnum',
});
