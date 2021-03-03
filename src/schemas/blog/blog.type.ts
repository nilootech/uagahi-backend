import { Field, ObjectType } from '@nestjs/graphql';
import { CommentModelType } from '../../models/comment/comment.model.type';
import { UserType } from '../user/user.type';

@ObjectType('Blog')
export class BlogType {
  @Field()
  title: string;

  @Field()
  content: string;

  @Field()
  active: boolean;

  @Field()
  imageUrl: string;

  @Field(() => [String])
  tags: string[];

  @Field(() => [CommentModelType])
  comments: CommentModelType[];

  @Field(() => UserType)
  user: UserType;
}
