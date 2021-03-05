import { Field, InputType } from '@nestjs/graphql';
import { TypeOfCooperationEnum } from './enums/type-of-cooperation.enum';
import { JobCategoryInput } from '../jobCategory/job-category.input';
import { LocationModelInput } from '../../models/location/location.model.input';
import { ContactModelInput } from '../../models/contact/contact.model.input';

@InputType()
export class JobSeekerInput {
  @Field()
  jobCategory: JobCategoryInput;

  @Field()
  fullName: string;

  @Field()
  skills: string[];

  @Field()
  typeOfCooperation: TypeOfCooperationEnum[];

  @Field()
  location: LocationModelInput;
  @Field()
  resumeUrl: string;

  @Field()
  contact: ContactModelInput;

  @Field()
  active: boolean;

  @Field()
  shareInLinkedIn: boolean;

  @Field()
  user: string;
}
