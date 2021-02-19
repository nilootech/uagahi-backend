import { Prop } from '@nestjs/mongoose';
import {
  VehicleBrand,
  VehicleBrandSchema,
} from '../vehicleBrand/vehicleBrand.schema';
import { PlaqueTypeEnum } from './plaqueType.enum';
import { GearBoxTypeEnum } from './gearBox.enum';
import { FuelTypeEnum } from './fuelType.enum';
import { BodyStatusEnum } from './bodyStatus.enum';
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
