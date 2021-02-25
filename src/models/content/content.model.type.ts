import { ContentTypeEnum } from './enums/content-type.enum';
import { Field, ObjectType } from '@nestjs/graphql';
import { VideoModelType } from '../video/video.model.type';
import { LocationModelType } from '../location/location.model.type';
import { VehicleModelType } from '../vehicle/vehicle.model.type';
import { HouseModelType } from '../house/house.model.type';

@ObjectType('ContentModel')
export class ContentModelType {
  @Field()
  websiteUrl: string;

  @Field()
  body: string;

  @Field()
  galleryUrls: [string];

  @Field()
  voiceUrl: string;

  @Field()
  video: VideoModelType;

  @Field(() => [String])
  tags: string[];

  @Field()
  location: LocationModelType;

  @Field()
  vehicle: VehicleModelType;

  @Field()
  house: HouseModelType;

  @Field()
  price: number;

  @Field()
  displayPrice: boolean;

  @Field()
  type: ContentTypeEnum;
}
