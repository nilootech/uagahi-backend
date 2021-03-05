import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AdsLocationDocument = AdsLocation & Document;

@Schema()
export class AdsLocation {
  @Prop()
  name: string;

  @Prop()
  page: string;

  @Prop()
  locationNumber: number;

  @Prop()
  price: number;

  @Prop()
  sizeGif: string;

  @Prop()
  active: boolean;
}

export const AdsLocationSchema = SchemaFactory.createForClass(AdsLocation);
