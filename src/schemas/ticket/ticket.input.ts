import { Field, InputType } from '@nestjs/graphql';
import { ContactModelInput } from '../../models/contact/contact.model.input';
import { ContentModelInput } from '../../models/content/content.model.input';
import { CategoryInput } from '../category/category.input';
import { VisitModelInput } from '../../models/visit/visit.model.input';
import { CommentModelInput } from '../../models/comment/comment.model.input';
import { MessageModelInput } from '../../models/message/message.model.input';
import { ManageTimeModelInput } from '../../models/manageTime/manageTime.model.input';
import { ReportModelInput } from '../../models/report/report.model.input';
import { InstagramModelInput } from '../../models/instagram/instagram.model.input';
import { TelegramModelInput } from '../../models/telegram/telegram.model.input';
import {
  IsBoolean,
  IsDateString,
  IsIP,
  IsNumber,
  IsString,
  IsUrl,
  MaxLength,
  MinLength,
} from 'class-validator';
import { IsNumberValidateOption } from '../../constants/index.constant';

@InputType()
export class TicketInput {
  @Field()
  @IsString()
  @MaxLength(150)
  @MinLength(10)
  title: string;

  @Field()
  @IsString()
  @MaxLength(100)
  @MinLength(1)
  name: string;

  @Field()
  contact: ContactModelInput;

  @Field()
  acceptedContent: ContentModelInput;

  @Field()
  tempContent: ContentModelInput;

  @Field()
  @IsNumber(IsNumberValidateOption)
  starsCount: number;

  @Field()
  category: CategoryInput;

  @Field(() => [VisitModelInput])
  visits: VisitModelInput[];

  @Field()
  @IsDateString()
  expire: Date;

  @Field()
  @IsBoolean()
  active: boolean;

  @Field(() => [CommentModelInput])
  comments: CommentModelInput[];

  @Field()
  @IsUrl()
  logoUrl: string;

  @Field(() => [String])
  @IsIP('4', { each: true })
  useful: string[];

  @Field(() => [MessageModelInput])
  messages: MessageModelInput[];

  @Field()
  manageTime: ManageTimeModelInput;

  @Field(() => [ReportModelInput])
  report: ReportModelInput[];

  @Field(() => [InstagramModelInput])
  instagram: InstagramModelInput[];

  @Field(() => [TelegramModelInput])
  telegram: TelegramModelInput[];
}
