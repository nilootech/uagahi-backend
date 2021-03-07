import { registerEnumType } from '@nestjs/graphql';

export enum SortTypeEnum {
  Asc = 1,
  Des = -1,
}

registerEnumType(SortTypeEnum, {
  name: 'SortTypeEnum',
});
