import { Field, InputType } from '@nestjs/graphql';
import { IsBoolean, IsNumber, MaxLength } from 'class-validator';
import { IsNumberValidateOption } from '../../constants/index.constant';

@InputType()
export class FaqInput {
  @Field()
  @MaxLength(1500)
  question: string;

  @Field()
  @MaxLength(2000)
  answer: string;

  @Field()
  @IsNumber(IsNumberValidateOption)
  order: number;

  @Field()
  @IsBoolean()
  active: boolean;
}
