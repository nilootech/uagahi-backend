import { Prop } from '@nestjs/mongoose';
import {
  VehicleBrand,
  VehicleBrandSchema,
} from '../../schemas/vehicleBrand/vehicleBrand.schema';
import { PlaqueTypeEnum } from './enums/plaqueType.enum';
import { GearBoxTypeEnum } from './enums/gearBox.enum';
import { FuelTypeEnum } from './enums/fuelType.enum';
import { BodyStatusEnum } from './enums/bodyStatus.enum';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('VehicleModel')
export class VehicleModelType {
  @Field()
  brand: VehicleBrand;

  @Field()
  model: string;

  @Field()
  madeYear: number;

  @Field()
  plaqueType: PlaqueTypeEnum;

  @Field()
  gearBoxType: GearBoxTypeEnum;

  @Field()
  fuelType: FuelTypeEnum;

  @Field()
  kilometer: number;

  @Field()
  bodyStatus: BodyStatusEnum;
}
