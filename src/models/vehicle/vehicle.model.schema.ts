import {
  VehicleBrand,
  VehicleBrandSchema,
} from '../../schemas/vehicleBrand/vehicleBrand.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { PlaqueTypeEnum } from './enums/plaqueType.enum';
import { GearBoxTypeEnum } from './enums/gearBox.enum';
import { FuelTypeEnum } from './enums/fuelType.enum';
import { BodyStatusEnum } from './enums/bodyStatus.enum';

@Schema()
export class VehicleModel {
  @Prop({ type: VehicleBrandSchema, required: true })
  brand: VehicleBrand;

  @Prop({ required: true })
  model: string;

  @Prop({ required: true })
  madeYear: number;

  @Prop({ type: String, default: PlaqueTypeEnum.National, required: true })
  plaqueType: PlaqueTypeEnum;

  @Prop({ type: String, default: GearBoxTypeEnum.Manual, required: true })
  gearBoxType: GearBoxTypeEnum;

  @Prop({ type: String, default: FuelTypeEnum.Fuel, required: true })
  fuelType: FuelTypeEnum;

  @Prop({ required: true })
  kilometer: number;

  @Prop({ type: String, default: BodyStatusEnum.NonePainted, required: true })
  bodyStatus: BodyStatusEnum;
}

export const VehicleModelSchema = SchemaFactory.createForClass(VehicleModel);
