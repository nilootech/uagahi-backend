import { Field, InputType } from '@nestjs/graphql';
import { IncomeTypesEnum } from '../../models/withdraw/enums/income-types.enum';
import { IsBoolean, IsDateString, IsEnum, MaxLength } from 'class-validator';

@InputType()
export class DiscountInput {
  @Field()
  @MaxLength(150)
  name: string;

  @Field()
  @MaxLength(150)
  code: string;

  @Field()
  @IsEnum(IncomeTypesEnum, { each: true })
  types: IncomeTypesEnum[];

  @Field()
  @IsDateString()
  fromDate: Date;

  @Field()
  @IsDateString()
  toDate: Date;

  @Field()
  @IsBoolean()
  active: boolean;
}
