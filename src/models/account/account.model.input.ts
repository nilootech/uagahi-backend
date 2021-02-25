import { Field, InputType } from '@nestjs/graphql';
import { IsBoolean, IsDate, IsNumber, MinLength } from 'class-validator';
import { IsNumberValidateOption } from '../../constants/index.constant';

@InputType()
export class AccountModelInput {
  @Field()
  @MinLength(5)
  name: string;

  @Field()
  @IsNumber(IsNumberValidateOption)
  countTicketPerDay: number;

  @Field()
  @IsBoolean()
  active: boolean;

  @Field()
  @IsDate()
  fromDate: Date;

  @Field()
  @IsDate()
  toDate: Date;
}
