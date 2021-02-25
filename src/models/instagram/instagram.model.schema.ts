import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { DoingModel, DoingModelSchema } from '../doing/doing.model.schema';

@Schema({ timestamps: true })
export class InstagramModel {
  @Prop()
  instaStory: boolean;

  @Prop()
  instaPost: boolean;

  @Prop()
  postText: string;

  @Prop()
  storyText: string;

  @Prop()
  storyImageUrl: string;

  @Prop()
  postImageUrl: string;

  @Prop()
  postPrice: number;

  @Prop()
  storyPrice: number;

  @Prop({ type: DoingModelSchema })
  doing: DoingModel;
}

export const InstagramModelSchema = SchemaFactory.createForClass(
  InstagramModel,
);
