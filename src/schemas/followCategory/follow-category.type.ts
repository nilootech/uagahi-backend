import { Field, ID, ObjectType } from '@nestjs/graphql';
import { CategoryType } from '../category/category.type';
import { UserType } from '../user/user.type';

@ObjectType('FollowCategory')
export class FollowCategoryType {
  @Field(() => ID)
  _id: string;

  @Field(() => CategoryType)
  category: CategoryType;

  @Field()
  expire: Date;

  @Field()
  price: number;

  @Field(() => UserType)
  user: UserType;
}
