import { Field, InputType } from '@nestjs/graphql';
import {
  IsBoolean,
  IsNumber,
  IsString,
  IsUrl,
  MaxLength,
} from 'class-validator';
import { IsNumberValidateOption } from '../../constants/index.constant';
import { DoingModelInput } from '../doing/doing.model.input';

@InputType()
export class InstagramModelInput {
  @Field()
  @IsBoolean()
  instaStory: boolean;

  @Field()
  @IsBoolean()
  instaPost: boolean;

  @Field()
  @IsString()
  @MaxLength(500)
  postText: string;

  @Field()
  @IsString()
  @MaxLength(200)
  storyText: string;

  @Field()
  @IsUrl()
  storyImageUrl: string;

  @Field()
  @IsUrl()
  postImageUrl: string;

  @Field()
  @IsNumber(IsNumberValidateOption)
  postPrice: number;

  @Field()
  @IsNumber(IsNumberValidateOption)
  storyPrice: number;

  @Field()
  doing: DoingModelInput;
}
