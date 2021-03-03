import { Field, InputType } from '@nestjs/graphql';
import { IsBoolean, IsNumber, MaxLength } from 'class-validator';
import { IsNumberValidateOption } from '../../constants/index.constant';

@InputType()
export class JobCategoryInput {
  @Field()
  @MaxLength(50)
  name: string;

  @Field()
  @IsNumber(IsNumberValidateOption)
  order: number;

  @Field()
  @IsBoolean()
  active: boolean;
}
