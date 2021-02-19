import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Role } from '../../auth/role/role.enum';
import { User } from './user.schema';
import { AccountModelType } from '../account/account.model.type';

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

  @Field(() => [Role])
  roles: Role[];

  @Field()
  active: boolean;

  @Field()
  mobile: string;

  @Field(() => [AccountModelType])
  accounts: AccountModelType[];
}
