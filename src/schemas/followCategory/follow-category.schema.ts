import { Category } from '../category/category.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { User } from '../user/user.schema';

export type FollowCategoryDocument = FollowCategory & Document;

@Schema({ timestamps: true })
export class FollowCategory {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Category' })
  category: Category;

  @Prop()
  expire: Date;

  @Prop()
  price: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;
}

export const FollowCategorySchema = SchemaFactory.createForClass(
  FollowCategory,
);
