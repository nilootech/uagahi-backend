import { registerEnumType } from '@nestjs/graphql';

export enum TypeOfCooperationEnum {
  FullTimePresent = 'FullTimePresent',
  PartTimePresent = 'PartTimePresent',
  FullTimeRemote = 'FullTimeRemote',
  PartTimeRemote = 'PartTimeRemote',
}

registerEnumType(TypeOfCooperationEnum, {
  name: 'TypeOfCooperationEnum',
});
