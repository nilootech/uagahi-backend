import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('DoingModel')
export class DoingModelType {
  @Field()
  active: boolean;

  @Field()
  doing: boolean;

  @Field()
  doingDate: Date;
}
