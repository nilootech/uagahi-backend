import { Field, ID, ObjectType } from '@nestjs/graphql';
import { UserType } from '../user/user.type';
import { TelegramModelType } from '../../models/telegram/telegram.model.type';
import { InstagramModelType } from '../../models/instagram/instagram.model.type';
import { ReportModelType } from '../../models/report/report.model.type';
import { MessageModelType } from '../../models/message/message.model.type';
import { CommentModelType } from '../../models/comment/comment.model.type';
import { VisitModelType } from '../../models/visit/visit.model.type';
import { ContactModelType } from '../../models/contact/contact.model.type';
import { ContentModelType } from '../../models/content/content.model.type';
import { CategoryType } from '../category/category.type';
import { ManageTimeModelType } from '../../models/manageTime/manageTime.model.type';

@ObjectType('Ticket')
export class TicketType {
  @Field(() => ID)
  _id: string;

  @Field()
  title: string;

  @Field()
  name: string;

  @Field()
  contact: ContactModelType;

  @Field()
  acceptedContent: ContentModelType;

  @Field()
  tempContent: ContentModelType;

  @Field()
  starsCount: number;

  @Field()
  category: CategoryType;

  @Field(() => [VisitModelType])
  visits: VisitModelType[];

  @Field()
  expire: Date;

  @Field()
  active: boolean;

  @Field(() => [CommentModelType])
  comments: CommentModelType[];

  @Field()
  logoUrl: string;

  @Field(() => [String])
  useful: string[];

  @Field(() => [MessageModelType])
  messages: MessageModelType[];

  @Field()
  manageTime: ManageTimeModelType;

  @Field(() => [ReportModelType])
  report: ReportModelType[];

  @Field(() => [InstagramModelType])
  instagram: InstagramModelType[];

  @Field(() => [TelegramModelType])
  telegram: TelegramModelType[];

  @Field()
  user: UserType;
}
