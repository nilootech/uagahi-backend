import { Field, ID, ObjectType } from '@nestjs/graphql';
import { AreaModelType } from '../../models/area/area.model.type';

@ObjectType('City')
export class CityType {
  @Field(() => ID)
  _id: string;

  @Field()
  name: string;

  @Field()
  code: string;

  @Field(() => [AreaModelType])
  areas: AreaModelType[];

  @Field()
  active: boolean;
}
