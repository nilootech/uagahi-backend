import {
  CoordinateModel,
  CoordinateModelSchema,
} from '../coordinate/coordinate.model.schema';
import { Prop, Schema } from '@nestjs/mongoose';

@Schema({ timestamps: true, _id: false })
export class VisitModel {
  @Prop({ type: String })
  ip: string;

  @Prop({ type: CoordinateModelSchema })
  coordinate: CoordinateModel;
}
