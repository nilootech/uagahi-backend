import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { VideoModel, VideoModelSchema } from '../video/video.model.schema';
import {
  LocationModel,
  LocationModelSchema,
} from '../location/location.model.schema';
import {
  VehicleModel,
  VehicleModelSchema,
} from '../vehicle/vehicle.model.schema';
import { HouseModel, HouseModelSchema } from '../house/house.model.schema';
import { ContentTypeEnum } from './enums/content-type.enum';

@Schema({ timestamps: true, _id: false })
export class ContentModel {
  @Prop()
  websiteUrl: string;

  @Prop()
  body: string;

  @Prop()
  galleryUrls: [string];

  @Prop()
  voiceUrl: string;

  @Prop({ type: VideoModelSchema })
  video: VideoModel;

  @Prop({ type: [String] })
  tags: string[];

  @Prop({ type: LocationModelSchema })
  location: LocationModel;

  @Prop({ type: VehicleModelSchema })
  vehicle: VehicleModel;

  @Prop({ type: HouseModelSchema })
  house: HouseModel;

  @Prop()
  price: number;

  @Prop()
  displayPrice: boolean;

  @Prop()
  type: ContentTypeEnum;
}

export const ContentModelSchema = SchemaFactory.createForClass(ContentModel);
