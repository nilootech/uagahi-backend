import { TypeRequestEnum } from './enums/type-request.enum';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { TypeHouseEnum } from './enums/type-house.enum';

@Schema({ timestamps: true, _id: false })
export class HouseModel {
  @Prop()
  typeRequest: TypeRequestEnum;

  @Prop()
  typeHouse: TypeHouseEnum;

  @Prop()
  meter: number;

  @Prop()
  prepayment: number;

  @Prop()
  roomCount: number;

  @Prop()
  madeYear: number;

  @Prop()
  floor: number;

  @Prop()
  elevator: boolean;

  @Prop()
  parking: boolean;

  @Prop()
  store: boolean;

  @Prop()
  coolingSystem: string;

  @Prop()
  heatingSystem: string;

  @Prop()
  heatingWaterSystem: string;

  @Prop()
  treas: string;

  @Prop()
  floorMaterial: string;

  @Prop()
  wc: string;

  @Prop()
  direction: string;

  @Prop()
  allFloorCount: number;

  @Prop()
  countUnitPerFloor: number;

  @Prop()
  wallMaterial: string;
}

export const HouseModelSchema = SchemaFactory.createForClass(HouseModel);
