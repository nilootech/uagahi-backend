import { Field, InputType } from '@nestjs/graphql';
import { IsBoolean, IsDate, IsNumber, MinLength } from 'class-validator';

@InputType()
export class AccountUserInput {
  @Field()
  @MinLength(5)
  name: string;

  @Field()
  @IsNumber()
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
