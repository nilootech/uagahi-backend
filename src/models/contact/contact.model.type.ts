import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('ContactModel')
export class ContactModelType {
  @Field()
  tels: string[];

  @Field()
  mobiles: string[];

  @Field()
  email: string;
}
