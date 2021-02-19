import { registerEnumType } from '@nestjs/graphql';

export enum GearBoxTypeEnum {
  AutoMate = 'AutoMate',
  Manual = 'Manual',
}

registerEnumType(GearBoxTypeEnum, {
  name: 'GearBoxType',
});
