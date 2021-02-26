import { PlaqueTypeEnum } from './enums/plaqueType.enum';
import { GearBoxTypeEnum } from './enums/gearBox.enum';
import { FuelTypeEnum } from './enums/fuelType.enum';
import { BodyStatusEnum } from './enums/bodyStatus.enum';
import { Field, ObjectType } from '@nestjs/graphql';
import { VehicleBrandType } from '../../schemas/vehicleBrand/vehicleBrand.type';

@ObjectType('VehicleModel')
export class VehicleModelType {
  @Field(() => VehicleBrandType)
  brand: VehicleBrandType;

  @Field()
  model: string;

  @Field()
  madeYear: number;

  @Field(() => PlaqueTypeEnum)
  plaqueType: PlaqueTypeEnum;

  @Field(() => GearBoxTypeEnum)
  gearBoxType: GearBoxTypeEnum;

  @Field(() => FuelTypeEnum)
  fuelType: FuelTypeEnum;

  @Field()
  kilometer: number;

  @Field(() => BodyStatusEnum)
  bodyStatus: BodyStatusEnum;
}
