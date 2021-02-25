import { Field, InputType } from '@nestjs/graphql';
import { ContentTypeEnum } from './enums/content-type.enum';
import { VideoModelInput } from '../video/video.model.input';
import { LocationModelInput } from '../location/location.model.input';
import { VehicleModelInput } from '../vehicle/vehicle.model.input';
import { HouseModelInput } from '../house/house.model.input';
import { IsNumber, IsString, IsUrl, MaxLength } from 'class-validator';
import { IsNumberValidateOption } from '../../constants/index.constant';

@InputType()
export class ContentModelInput {
  @Field()
  @IsUrl()
  websiteUrl: string;

  @Field()
  @IsString()
  body: string;

  @Field()
  @IsUrl({ require_protocol: true }, { each: true })
  galleryUrls: [string];

  @Field()
  @IsUrl()
  voiceUrl: string;

  @Field()
  video: VideoModelInput;

  @Field(() => [String])
  @MaxLength(50, { each: true })
  tags: string[];

  @Field()
  location: LocationModelInput;

  @Field()
  vehicle: VehicleModelInput;

  @Field()
  house: HouseModelInput;

  @Field()
  @IsNumber(IsNumberValidateOption)
  price: number;

  @Field()
  displayPrice: boolean;

  @Field()
  type: ContentTypeEnum;
}
