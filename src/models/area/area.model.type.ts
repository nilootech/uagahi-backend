import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('AreaModel')
export class AreaModelType {
  @Field()
  areaName: string;

  @Field()
  neighbourhood: string;
}
