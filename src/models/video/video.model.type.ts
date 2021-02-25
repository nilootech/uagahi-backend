import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('VideoModel')
export class VideoModelType {
  @Field(() => ID)
  _id: string;

  @Field()
  videoUrl: string;

  @Field()
  price: number;
}
