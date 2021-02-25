import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ _id: false })
export class AreaModel {
  @Prop({ required: true })
  areaName: string;

  @Prop({ required: true })
  neighbourhood: string;
}

export const AreaModelSchema = SchemaFactory.createForClass(AreaModel);
