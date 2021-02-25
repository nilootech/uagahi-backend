import { registerEnumType } from '@nestjs/graphql';

export enum TypeHouseEnum {
  Living = 'Living',
  Business = 'Business',
  ShortRent = 'ShortRent',
  Building = 'Building',
}

registerEnumType(TypeHouseEnum, {
  name: 'Living',
});
