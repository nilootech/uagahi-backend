import { Field, ObjectType } from '@nestjs/graphql';
import { CoordinateModelType } from '../coordinate/coordinate.model.type';

@ObjectType('VisitModel')
export class VisitModelType {
  @Field()
  ip: string;

  @Field()
  createAt: Date;

  @Field()
  updateAt: Date;

  @Field(() => CoordinateModelType)
  coordinate: CoordinateModelType;
}
