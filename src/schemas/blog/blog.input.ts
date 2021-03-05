import { Field, InputType } from '@nestjs/graphql';
import { CommentModelInput } from '../../models/comment/comment.model.input';
import { MaxLength } from 'class-validator';

@InputType()
export class BlogInput {
  @Field()
  @MaxLength(150)
  title: string;

  @Field()
  content: string;

  @Field()
  active: boolean;

  @Field()
  imageUrl: string;

  @Field()
  tags: string[];

  @Field()
  comments: CommentModelInput[];

  @Field()
  user: string;
}
