import { registerEnumType } from '@nestjs/graphql';

export enum FuelTypeEnum {
  Fuel = 'Fuel',
  Gas = 'Gas',
  Electric = 'Electric',
  Hybrid = 'Hybrid',
}

registerEnumType(FuelTypeEnum, {
  name: 'FuelType',
});
