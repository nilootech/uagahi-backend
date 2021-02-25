import { Field, InputType } from '@nestjs/graphql';
import { TypeRequestEnum } from './enums/type-request.enum';
import { TypeHouseEnum } from './enums/type-house.enum';
import {
  IsBoolean,
  IsEnum,
  IsNumber,
  IsString,
  MaxLength,
} from 'class-validator';
import { IsNumberValidateOption } from '../../constants/index.constant';

@InputType()
export class HouseModelInput {
  @Field()
  @IsEnum(TypeRequestEnum)
  typeRequest: TypeRequestEnum;

  @Field()
  @IsEnum(TypeHouseEnum)
  typeHouse: TypeHouseEnum;

  @Field()
  @IsNumber(IsNumberValidateOption)
  meter: number;

  @Field()
  @IsNumber(IsNumberValidateOption)
  prepayment: number;

  @Field()
  @IsNumber(IsNumberValidateOption)
  roomCount: number;

  @Field()
  @IsNumber(IsNumberValidateOption)
  @MaxLength(4)
  madeYear: number;

  @Field()
  @IsNumber(IsNumberValidateOption)
  floor: number;

  @Field()
  @IsBoolean()
  elevator: boolean;

  @Field()
  @IsBoolean()
  parking: boolean;

  @Field()
  @IsBoolean()
  store: boolean;

  @Field()
  @IsString()
  @MaxLength(50)
  coolingSystem: string;

  @Field()
  @IsString()
  @MaxLength(50)
  heatingSystem: string;

  @Field()
  @IsString()
  @MaxLength(50)
  heatingWaterSystem: string;

  @Field()
  @IsBoolean()
  treas: boolean;

  @Field()
  @IsString()
  floorMaterial: string;

  @Field()
  @IsString()
  wc: string;

  @Field()
  @IsString()
  direction: string;

  @Field()
  @IsNumber(IsNumberValidateOption)
  allFloorCount: number;

  @Field()
  @IsNumber(IsNumberValidateOption)
  countUnitPerFloor: number;

  @Field()
  @IsString()
  wallMaterial: string;
}
