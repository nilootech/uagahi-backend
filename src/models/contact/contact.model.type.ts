import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('ContactModel')
export class ContactModelType {
  @Field(() => [String])
  tels: string[];

  @Field(() => [String])
  mobiles: string[];

  @Field()
  email: string;
}
