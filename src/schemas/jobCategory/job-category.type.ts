import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('JobCategory')
export class JobCategoryType {
  @Field()
  _id: string;

  @Field()
  name: string;

  @Field()
  order: number;

  @Field()
  active: boolean;
}
