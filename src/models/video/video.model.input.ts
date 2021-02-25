import { Field, InputType } from '@nestjs/graphql';
import { IsNumber, IsUrl } from 'class-validator';
import { IsNumberValidateOption } from '../../constants/index.constant';

@InputType()
export class VideoModelInput {
  @Field()
  @IsUrl()
  videoUrl: string;

  @Field()
  @IsNumber(IsNumberValidateOption)
  price: number;
}
