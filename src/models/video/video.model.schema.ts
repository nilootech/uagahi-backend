import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class VideoModel {
  @Prop()
  videoUrl: string;

  @Prop()
  price: number;
}

export const VideoModelSchema = SchemaFactory.createForClass(VideoModel);
