import { registerEnumType } from '@nestjs/graphql';

export enum RoleEnum {
  User = 'USER',
  Admin = 'ADMIN',
}

registerEnumType(RoleEnum, {
  name: 'Role',
});
