import {
  ContactModel,
  ContactModelSchema,
} from '../../models/contact/contact.model.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {
  ContentModel,
  ContentModelSchema,
} from '../../models/content/content.model.schema';
import { Category, CategorySchema } from '../category/category.schema';
import {
  VisitModel,
  VisitModelSchema,
} from '../../models/visit/visit.model.schema';
import {
  CommentModel,
  CommentModelSchema,
} from '../../models/comment/comment.model.schema';
import {
  MessageModel,
  MessageModelSchema,
} from '../../models/message/message.model.schema';
import {
  ManageTimeModel,
  ManageTimeModelSchema,
} from '../../models/manageTime/manage-time.model.schema';
import {
  ReportModel,
  ReportModelSchema,
} from '../../models/report/report.model.schema';
import {
  InstagramModel,
  InstagramModelSchema,
} from '../../models/instagram/instagram.model.schema';
import {
  TelegramModel,
  TelegramModelSchema,
} from '../../models/telegram/telegram.model.schema';
import { User } from '../user/user.schema';
import * as mongoose from 'mongoose';
import {
  RateModel,
  RateModelSchema,
} from '../../models/rate/rate.model.schema';
import { Document } from 'mongoose';

export type TicketDocument = Ticket & Document;

@Schema({ timestamps: true })
export class Ticket {
  @Prop({ required: true, index: true })
  title: string;

  @Prop({ required: true, index: true })
  name: string;

  @Prop({ type: ContactModelSchema, index: true })
  contact: ContactModel;

  @Prop({ type: ContentModelSchema, index: true })
  acceptedContent: ContentModel;

  @Prop({ type: ContentModelSchema })
  tempContent: ContentModel;

  @Prop({ default: 0 })
  starsCount: number;

  @Prop({ type: CategorySchema, required: true, index: true })
  category: Category;

  @Prop({ type: [VisitModelSchema] })
  visits: VisitModel[];

  @Prop({ type: [RateModelSchema] })
  rates: RateModel[];

  @Prop()
  expire: Date;

  @Prop()
  active: boolean;

  @Prop()
  publish: boolean;

  @Prop({ type: [CommentModelSchema] })
  comments: CommentModel[];

  @Prop()
  logoUrl: string;

  @Prop({ type: [MessageModelSchema] })
  messages: MessageModel[];

  @Prop({ type: ManageTimeModelSchema })
  manageTime: ManageTimeModel;

  @Prop({ type: [ReportModelSchema] })
  report: ReportModel[];

  @Prop({ type: [InstagramModelSchema] })
  instagram: InstagramModel[];

  @Prop({ type: [TelegramModelSchema] })
  telegram: TelegramModel[];

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;
}

export const TicketSchema = SchemaFactory.createForClass(Ticket);
