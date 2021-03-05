import { Field, InputType } from '@nestjs/graphql';
import { IsBoolean, IsUrl, MaxLength } from 'class-validator';
import { LocationModelInput } from '../../models/location/location.model.input';
import { VisitModelInput } from '../../models/visit/visit.model.input';
import { CommentModelInput } from '../../models/comment/comment.model.input';

@InputType()
export class JobInput {
  @Field()
  @MaxLength(150)
  name: string;

  @Field()
  @IsUrl()
  logoUrl: string;

  @Field()
  location: LocationModelInput;

  @Field()
  @IsUrl({ require_host: true, require_protocol: true }, { each: true })
  galleryUrls: string[];

  @Field()
  jobCategory: string;

  @Field()
  boss: string;

  @Field()
  websiteUrl: string;

  @Field()
  content: string;

  @Field()
  @MaxLength(50, { each: true })
  tags: string[];

  @Field()
  @IsBoolean()
  active: boolean;

  @Field()
  @IsBoolean()
  authenticated: boolean;

  @Field()
  scores: VisitModelInput[];

  @Field()
  comments: CommentModelInput[];
}
