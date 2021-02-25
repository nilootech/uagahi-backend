import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProvinceDocument = Province & Document;

@Schema()
export class Province {
  @Prop()
  name: string;

  @Prop()
  code: string;

  @Prop()
  active: boolean;
}

export const ProvinceSchema = SchemaFactory.createForClass(Province);
