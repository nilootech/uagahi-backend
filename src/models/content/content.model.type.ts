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

  @Field(() => [String])
  galleryUrls: string[];

  @Field()
  voiceUrl: string;

  @Field(() => VideoModelType)
  video: VideoModelType;

  @Field(() => [String])
  tags: string[];

  @Field(() => LocationModelType)
  location: LocationModelType;

  @Field(() => VehicleModelType)
  vehicle: VehicleModelType;

  @Field(() => HouseModelType)
  house: HouseModelType;

  @Field()
  price: number;

  @Field()
  displayPrice: boolean;

  @Field(() => ContentTypeEnum)
  type: ContentTypeEnum;
}
