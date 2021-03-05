import { Field, ID, ObjectType } from '@nestjs/graphql';
import { DoingModelType } from '../doing/doing.model.type';

@ObjectType('InstagramModelType')
export class InstagramModelType {
  @Field(() => ID)
  _id: string;

  @Field()
  instaStory: boolean;

  @Field()
  instaPost: boolean;

  @Field()
  postText: string;

  @Field()
  storyText: string;

  @Field()
  storyImageUrl: string;

  @Field()
  postImageUrl: string;

  @Field()
  postPrice: number;

  @Field()
  storyPrice: number;

  @Field(() => DoingModelType)
  doing: DoingModelType;
}
