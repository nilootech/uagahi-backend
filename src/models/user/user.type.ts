import { Field, ID, ObjectType } from '@nestjs/graphql';

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
}