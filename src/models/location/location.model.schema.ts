import {
  Province,
  ProvinceSchema,
} from '../../schemas/province/province.schema';
import { City, CitySchema } from '../../schemas/city/city.schema';
import { AreaModel, AreaModelSchema } from '../area/area.model.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {
  CoordinateModel,
  CoordinateModelSchema,
} from '../coordinate/coordinate.model.schema';

@Schema({ _id: false })
export class LocationModel {
  @Prop({ type: CoordinateModelSchema })
  coordinate: CoordinateModel;

  @Prop({ type: ProvinceSchema, required: true })
  province: Province;

  @Prop({ type: CitySchema, required: true })
  city: City;

  @Prop({ type: AreaModelSchema })
  area: AreaModel;

  @Prop()
  address: string;
}

export const LocationModelSchema = SchemaFactory.createForClass(LocationModel);
