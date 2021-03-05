import { Field, InputType } from '@nestjs/graphql';
import { AdsLocationInput } from '../adsLocation/ads-location.input';
import { IsDateString, IsUrl, MaxLength } from 'class-validator';

@InputType()
export class AdsInput {
  @Field()
  @IsUrl()
  gifUrl: string;

  @Field()
  adsLocation: string;

  @Field()
  @IsUrl()
  link: string;

  @Field()
  @MaxLength(150)
  title: string;

  @Field()
  @IsDateString()
  fromDateTime: Date;

  @Field()
  @IsDateString()
  toDateTime: Date;

  @Field()
  user: string;
}
