import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { RoleEnum } from '../../auth/role/role.enum';
import {
  AccountModel,
  AccountModelSchema,
} from '../../models/account/account.model.schema';
import { Financial } from '../financial/financial.schema';
import * as mongoose from 'mongoose';
import { Ticket } from '../ticket/ticket.schema';
import { Ads } from '../ads/ads.schema';
import { JobSeeker } from '../jobSeeker/jobSeeker.schema';
import { FollowCategory } from '../followCategory/followCategory.schema';

export type UserDocument = User & Document;

@Schema({ timestamps: true, autoIndex: false })
export class User {
  @Prop()
  name: string;

  @Prop({
    required: true,
    unique: true,
    index: true,
  })
  email: string;

  @Prop({ unique: true, index: true })
  mobile: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  salt: string;

  @Prop({ required: true })
  birthDate: Date;

  @Prop()
  accessToken: string;

  @Prop()
  refreshToken: string;

  @Prop({ type: [String] })
  roles: RoleEnum[];

  @Prop({ required: true, default: false })
  active: boolean;

  @Prop({ type: [AccountModelSchema], required: true })
  accounts: AccountModel[];

  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'Ticket' }])
  tickets: Ticket[];

  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'Financial' }])
  financials: Financial[];

  @Prop({ default: 0 })
  balance: number;

  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'Ads' }])
  advises: Ads[];

  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'JobSeeker' }])
  jobSeekers: JobSeeker[];

  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'FollowCategory' }])
  followCategories: FollowCategory[];
}

export const UserSchema = SchemaFactory.createForClass(User);
