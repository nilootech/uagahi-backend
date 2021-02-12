import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Role } from '../../auth/role/role.enum';

@ObjectType('User')
export class UserType {
  @Field(() => ID)
  _id: string;

  @Field()
  name: string;

  @Field()
  password: string;

  @Field()
  birthDate: Date;

  @Field()
  userName: string;

  @Field()
  accessToken: string;

  @Field()
  refreshToken: string;

  @Field(() => [Role])
  roles: Role[];
}
