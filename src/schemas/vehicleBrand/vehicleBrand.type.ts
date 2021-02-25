import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('VehicleBrand')
export class VehicleBrandType {
  @Field(() => ID)
  _id: string;

  @Field()
  name: string;

  @Field(() => [String])
  models: string[];
}
