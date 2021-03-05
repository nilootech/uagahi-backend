import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class FollowCategoryInput {
  @Field()
  category: string;

  @Field()
  expire: Date;

  @Field()
  price: number;
}
