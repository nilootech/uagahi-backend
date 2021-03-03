import { AdsLocation } from '../adsLocation/adsLocation.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { User } from '../user/user.schema';
import { Document } from 'mongoose';

export type AdsDocument = Ads & Document;

@Schema({ timestamps: true })
export class Ads {
  @Prop()
  gifUrl: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'AdsLocation' })
  adsLocation: AdsLocation;

  @Prop()
  link: string;

  @Prop()
  title: string;

  @Prop()
  fromDateTime: Date;

  @Prop()
  toDateTime: Date;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;
}

export const AdsSchema = SchemaFactory.createForClass(Ads);
