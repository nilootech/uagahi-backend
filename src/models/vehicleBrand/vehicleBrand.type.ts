import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('VehicleBrand')
export class VehicleBrandType {
  @Field()
  name: string;

  @Field(() => [String])
  models: string[];
}
