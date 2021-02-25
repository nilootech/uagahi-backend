import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('CoordinateModel')
export class CoordinateModelType {
  @Field()
  lat: string;

  @Field()
  lng: string;
}
