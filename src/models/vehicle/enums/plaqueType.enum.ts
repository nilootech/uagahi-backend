import { registerEnumType } from '@nestjs/graphql';

export enum PlaqueTypeEnum {
  National = 'National',
  FreeArea = 'FreeArea',
}

registerEnumType(PlaqueTypeEnum, { name: 'PlaqueType' });
