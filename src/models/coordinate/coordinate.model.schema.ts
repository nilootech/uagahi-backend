import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';

@Schema({ _id: false })
export class CoordinateModel {
  @Prop({ required: true })
  lat: string;

  @Prop({ required: true })
  lng: string;
}

export const CoordinateModelSchema = SchemaFactory.createForClass(
  CoordinateModel,
);
