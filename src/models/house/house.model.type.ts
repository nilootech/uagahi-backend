import { TypeRequestEnum } from './enums/type-request.enum';
import { TypeHouseEnum } from './enums/type-house.enum';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('HouseModel')
export class HouseModelType {
  @Field(() => TypeRequestEnum)
  typeRequest: TypeRequestEnum;

  @Field(() => TypeHouseEnum)
  typeHouse: TypeHouseEnum;

  @Field()
  meter: number;

  @Field()
  prepayment: number;

  @Field()
  roomCount: number;

  @Field()
  madeYear: number;

  @Field()
  floor: number;

  @Field()
  elevator: boolean;

  @Field()
  parking: boolean;

  @Field()
  store: boolean;

  @Field()
  coolingSystem: string;

  @Field()
  heatingSystem: string;

  @Field()
  heatingWaterSystem: string;

  @Field()
  treas: string;

  @Field()
  floorMaterial: string;

  @Field()
  wc: string;

  @Field()
  direction: string;

  @Field()
  allFloorCount: number;

  @Field()
  countUnitPerFloor: number;

  @Field()
  wallMaterial: string;
}
