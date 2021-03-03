import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { JobSeeker } from '../jobSeeker/jobSeeker.schema';
import * as mongoose from 'mongoose';

export type JobCategoryDocument = JobCategory & Document;

@Schema()
export class JobCategory {
  @Prop()
  name: string;

  @Prop()
  order: number;

  @Prop()
  active: boolean;

  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'JobSeeker' }])
  jobSeekers: JobSeeker[];
}

export const JobCategorySchema = SchemaFactory.createForClass(JobCategory);
