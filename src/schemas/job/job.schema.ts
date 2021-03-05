import {
  LocationModel,
  LocationModelSchema,
} from '../../models/location/location.model.schema';
import { Category } from '../category/category.schema';
import {
  VisitModel,
  VisitModelSchema,
} from '../../models/visit/visit.model.schema';
import {
  CommentModel,
  CommentModelSchema,
} from '../../models/comment/comment.model.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export type JobDocument = Job & Document;

@Schema({ timestamps: true })
export class Job {
  @Prop()
  name: string;

  @Prop()
  logoUrl: string;

  @Prop({ type: LocationModelSchema })
  location: LocationModel;

  @Prop()
  galleryUrls: string[];

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Category' })
  jobCategory: Category;

  @Prop()
  boss: string;

  @Prop()
  websiteUrl: string;

  @Prop()
  content: string;

  @Prop({ type: [String] })
  tags: string[];

  @Prop()
  active: boolean;

  @Prop()
  authenticated: boolean;

  @Prop({ type: [VisitModelSchema] })
  scores: VisitModel[];

  @Prop({ type: [CommentModelSchema] })
  comments: CommentModel[];
}

export const JobSchema = SchemaFactory.createForClass(Job);
