import { Field, InputType } from '@nestjs/graphql';
import { IsDateString, IsNumber, IsString } from 'class-validator';

@InputType()
export class PaymentModelInput {
  @Field()
  @IsNumber()
  amount: number;

  @Field()
  @IsDateString()
  date: Date;

  @Field()
  @IsString()
  bank: string;

  @Field()
  @IsString()
  traceCode: string;
}
