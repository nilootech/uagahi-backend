import { Field, ID, ObjectType } from '@nestjs/graphql';
import { RoleEnum } from '../../auth/role/role.enum';
import { User } from './user.schema';
import { AccountModelType } from '../../models/account/account.model.type';

@ObjectType('User')
export class UserType {
  @Field(() => ID)
  _id: string;

  @Field()
  name: string;

  @Field()
  birthDate: Date;

  @Field()
  email: string;

  @Field(() => [RoleEnum])
  roles: RoleEnum[];

  @Field()
  active: boolean;

  @Field()
  mobile: string;

  @Field(() => [AccountModelType])
  accounts: AccountModelType[];
}
