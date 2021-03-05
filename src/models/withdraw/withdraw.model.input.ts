import { Field, InputType } from '@nestjs/graphql';
import { IncomeTypesEnum } from './enums/income-types.enum';
import { IsDateString, IsEnum, IsNumber, IsString } from 'class-validator';
import { IsNumberValidateOption } from '../../constants/index.constant';

@InputType()
export class WithdrawModelInput {
  @Field()
  @IsEnum(IncomeTypesEnum)
  type: IncomeTypesEnum;

  @Field()
  @IsString()
  refId: string;

  @Field()
  @IsNumber(IsNumberValidateOption)
  amount: number;

  @Field()
  @IsDateString()
  date: Date;
}
