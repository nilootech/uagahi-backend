import { registerEnumType } from '@nestjs/graphql';

export enum TypeRequestEnum {
  Rent = 'Rent',
  Sale = 'Sale',
}

registerEnumType(TypeRequestEnum, {
  name: 'TypeRequestEnum',
});
