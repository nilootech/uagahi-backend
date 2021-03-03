import { JobCategory } from '../jobCategory/jobCategory.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { TypeOfCooperationEnum } from './enums/typeOfCooperation.enum';
import {
  LocationModel,
  LocationModelSchema,
} from '../../models/location/location.model.schema';
import {
  ContactModel,
  ContactModelSchema,
} from '../../models/contact/contact.model.schema';
import { Document } from 'mongoose';
import { User } from '../user/user.schema';

export type JobSeekerDocument = JobSeeker & Document;

@Schema({ timestamps: true })
export class JobSeeker {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'JobCategory' })
  jobCategory: JobCategory;

  @Prop()
  fullName: string;

  @Prop({ type: [String] })
  skills: string[];

  @Prop({ type: [TypeOfCooperationEnum] })
  typeOfCooperation: TypeOfCooperationEnum[];

  @Prop({ type: LocationModelSchema })
  location: LocationModel;

  @Prop()
  resumeUrl: string;

  @Prop({ type: ContactModelSchema })
  contact: ContactModel;

  @Prop()
  active: boolean;

  @Prop()
  shareInLinkedIn: boolean;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;
}

export const JobSeekerSchema = SchemaFactory.createForClass(JobSeeker);
