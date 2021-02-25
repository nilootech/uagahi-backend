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

@InputType()
export class HouseModelInput {
  @Field()
  @IsEnum(TypeRequestEnum)
  typeRequest: TypeRequestEnum;

  @Field()
  @IsEnum(TypeHouseEnum)
  typeHouse: TypeHouseEnum;

  @Field()
  @IsNumber()
  meter: number;

  @Field()
  @IsNumber()
  prepayment: number;

  @Field()
  @IsNumber()
  roomCount: number;

  @Field()
  @IsNumber()
  @MaxLength(4)
  madeYear: number;

  @Field()
  @IsNumber()
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
  @IsNumber()
  allFloorCount: number;

  @Field()
  @IsNumber()
  countUnitPerFloor: number;

  @Field()
  @IsString()
  wallMaterial: string;
}
