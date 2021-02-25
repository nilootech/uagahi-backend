import {
  AreaModel,
  AreaModelSchema,
} from '../../models/area/area.model.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CityDocument = City & Document;

@Schema()
export class City {
  @Prop()
  name: string;

  @Prop()
  code: string;

  @Prop({ type: [AreaModelSchema] })
  areas: AreaModel[];

  @Prop()
  active: boolean;
}

export const CitySchema = SchemaFactory.createForClass(City);
