import { Field, InputType } from '@nestjs/graphql';
import { IsBoolean, IsNumber, IsString, MaxLength } from 'class-validator';
import { IsNumberValidateOption } from '../../constants/index.constant';

@InputType()
export class CategoryInput {
  @Field()
  @IsString()
  @MaxLength(50)
  name: string;

  @Field()
  @MaxLength(500)
  description: string;

  @Field()
  @IsNumber(IsNumberValidateOption)
  order: number;

  @Field()
  @IsBoolean()
  active: boolean;
}
