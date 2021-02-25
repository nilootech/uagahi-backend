import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('Province')
export class ProvinceType {
  @Field(() => ID)
  _id: string;

  @Field()
  name: string;

  @Field()
  code: string;

  @Field()
  active: boolean;
}
