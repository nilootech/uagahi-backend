import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('CommentModel')
export class CommentModelType {
  @Field()
  email: string;

  @Field()
  mobile: string;

  @Field()
  name: string;

  @Field()
  comment: string;

  @Field()
  active: boolean;

  @Field()
  reply: string;
}
