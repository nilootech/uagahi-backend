import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class CommentModel {
  @Prop({ required: true })
  email: string;

  @Prop()
  mobile: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  comment: string;

  @Prop({ default: false })
  active: boolean;

  @Prop()
  reply: string;
}

export const CommentModelSchema = SchemaFactory.createForClass(CommentModel);
