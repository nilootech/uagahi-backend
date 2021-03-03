import { Field, ID, ObjectType } from '@nestjs/graphql';
import { LocationModelType } from '../../models/location/location.model.type';
import { CategoryType } from '../category/category.type';
import { VisitModelType } from '../../models/visit/visit.model.type';
import { CommentModelType } from '../../models/comment/comment.model.type';

@ObjectType('Job')
export class JobType {
  @Field(() => ID)
  _id: string;

  @Field()
  name: string;

  @Field()
  logoUrl: string;

  @Field(() => LocationModelType)
  location: LocationModelType;

  @Field()
  galleryUrls: string[];

  @Field(() => CategoryType)
  jobCategory: CategoryType;

  @Field()
  boss: string;

  @Field()
  websiteUrl: string;

  @Field()
  content: string;

  @Field(() => [String])
  tags: string[];

  @Field()
  active: boolean;

  @Field()
  authenticated: boolean;

  @Field(() => [VisitModelType])
  scores: VisitModelType[];

  @Field(() => [CommentModelType])
  comments: CommentModelType[];
}
