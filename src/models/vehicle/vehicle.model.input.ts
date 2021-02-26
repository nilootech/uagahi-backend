import { Field, InputType, Int } from '@nestjs/graphql';
import { PlaqueTypeEnum } from './enums/plaqueType.enum';
import { GearBoxTypeEnum } from './enums/gearBox.enum';
import { FuelTypeEnum } from './enums/fuelType.enum';
import { BodyStatusEnum } from './enums/bodyStatus.enum';
import {
  IsEnum,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { IsNumberValidateOption } from '../../constants/index.constant';
import { VehicleBrandInput } from '../../schemas/vehicleBrand/vehicleBrand.input';

@InputType()
export class VehicleModelInput {
  @Field()
  brand: VehicleBrandInput;

  @Field()
  @IsString()
  @MaxLength(25)
  model: string;

  @Field(() => Int)
  @IsNumber(IsNumberValidateOption)
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
  @IsNumber(IsNumberValidateOption)
  kilometer: number;

  @Field()
  @IsEnum(BodyStatusEnum)
  bodyStatus: BodyStatusEnum;
}
