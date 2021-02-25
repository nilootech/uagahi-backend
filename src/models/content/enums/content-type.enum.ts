import { registerEnumType } from '@nestjs/graphql';

export enum ContentTypeEnum {
  ForSale = 'ForSale',
  Requested = 'Requested',
}

registerEnumType(ContentTypeEnum, {
  name: 'ContentTypeEnum',
});
