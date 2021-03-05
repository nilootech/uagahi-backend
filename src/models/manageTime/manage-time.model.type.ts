import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('ManageTimeModel')
export class ManageTimeModelType {
  @Field()
  publishTime: Date;
}
