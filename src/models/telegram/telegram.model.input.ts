import { Field, InputType } from '@nestjs/graphql';
import { IsNumber, IsString, IsUrl, MaxLength } from 'class-validator';
import { DoingModelInput } from '../doing/doing.model.input';

@InputType()
export class TelegramModelInput {
  @Field()
  @IsUrl()
  imageUrl: string;

  @Field()
  @IsString()
  @MaxLength(1000)
  text: string;

  @Field()
  @IsNumber()
  price: number;

  @Field()
  doing: DoingModelInput;
}
