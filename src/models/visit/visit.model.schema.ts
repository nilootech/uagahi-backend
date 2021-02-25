import {
  CoordinateModel,
  CoordinateModelSchema,
} from '../coordinate/coordinate.model.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true, _id: false })
export class VisitModel {
  @Prop({ type: String })
  ip: string;

  @Prop({ type: CoordinateModelSchema })
  coordinate: CoordinateModel;
}

export const VisitModelSchema = SchemaFactory.createForClass(VisitModel);
