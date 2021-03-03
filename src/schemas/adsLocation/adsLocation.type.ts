import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('AdsLocation')
export class AdsLocationType {
  @Field()
  name: string;

  @Field()
  page: string;

  @Field()
  locationNumber: number;

  @Field()
  price: number;

  @Field()
  sizeGif: string;

  @Field()
  active: boolean;
}
