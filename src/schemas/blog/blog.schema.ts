import {
  CommentModel,
  CommentModelSchema,
} from '../../models/comment/comment.model.schema';
import { User } from '../user/user.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export type BlogDocument = Blog & Document;

@Schema({ timestamps: true })
export class Blog {
  @Prop()
  title: string;

  @Prop()
  content: string;

  @Prop()
  active: boolean;

  @Prop()
  imageUrl: string;

  @Prop()
  tags: string[];

  @Prop({ type: [CommentModelSchema] })
  comments: CommentModel[];

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;
}

export const BlogSchema = SchemaFactory.createForClass(Blog);
