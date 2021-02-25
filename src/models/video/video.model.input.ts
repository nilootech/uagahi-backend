import { Field, InputType } from '@nestjs/graphql';
import { IsNumber, IsUrl } from 'class-validator';

@InputType()
export class VideoModelInput {
  @Field()
  @IsUrl()
  videoUrl: string;

  @Field()
  @IsNumber()
  price: number;
}
