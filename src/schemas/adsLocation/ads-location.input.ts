import { Field, InputType } from '@nestjs/graphql';
import { IsBoolean, IsNumber, MaxLength } from 'class-validator';
import { IsNumberValidateOption } from '../../constants/index.constant';

@InputType()
export class AdsLocationInput {
  @Field()
  @MaxLength(150)
  name: string;

  @Field()
  @MaxLength(150)
  page: string;

  @Field()
  @IsNumber(IsNumberValidateOption)
  locationNumber: number;

  @Field()
  @IsNumber(IsNumberValidateOption)
  price: number;

  @Field()
  @MaxLength(50)
  sizeGif: string;

  @Field()
  @IsBoolean()
  active: boolean;
}
