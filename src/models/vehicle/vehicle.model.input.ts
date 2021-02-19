import { Field, InputType, Int } from '@nestjs/graphql';
import { VehicleBrand } from '../vehicleBrand/vehicleBrand.schema';
import { PlaqueTypeEnum } from './plaqueType.enum';
import { GearBoxTypeEnum } from './gearBox.enum';
import { FuelTypeEnum } from './fuelType.enum';
import { BodyStatusEnum } from './bodyStatus.enum';
import {
  IsEnum,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

@InputType()
export class VehicleModelInput {
  @Field()
  @IsEnum(VehicleBrand)
  brand: VehicleBrand;

  @Field()
  @IsString()
  @MaxLength(25)
  model: string;

  @Field(() => Int)
  @IsNumber()
  @MaxLength(4)
  @MinLength(4)
  madeYear: number;

  @Field()
  @IsEnum(PlaqueTypeEnum)
  plaqueType: PlaqueTypeEnum;

  @Field()
  @IsEnum(GearBoxTypeEnum)
  gearBoxType: GearBoxTypeEnum;

  @Field()
  @IsEnum(FuelTypeEnum)
  fuelType: FuelTypeEnum;

  @Field()
  @IsNumber()
  kilometer: number;

  @Field()
  @IsEnum(BodyStatusEnum)
  bodyStatus: BodyStatusEnum;
}
