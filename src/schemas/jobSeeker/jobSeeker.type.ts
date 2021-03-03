import { TypeOfCooperationEnum } from './enums/typeOfCooperation.enum';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { JobCategoryType } from '../jobCategory/jobCategory.type';
import { LocationModelType } from '../../models/location/location.model.type';
import { ContactModelType } from '../../models/contact/contact.model.type';
import { UserType } from '../user/user.type';

@ObjectType('JobSeeker')
export class JobSeekerType {
  @Field(() => ID)
  _id: string;

  @Field(() => JobCategoryType)
  jobCategory: JobCategoryType;

  @Field()
  fullName: string;

  @Field(() => [String])
  skills: string[];

  @Field(() => [TypeOfCooperationEnum])
  typeOfCooperation: TypeOfCooperationEnum[];

  @Field(() => LocationModelType)
  location: LocationModelType;

  @Field()
  resumeUrl: string;

  @Field(() => ContactModelType)
  contact: ContactModelType;

  @Field()
  active: boolean;

  @Field()
  shareInLinkedIn: boolean;

  @Field(() => UserType)
  user: UserType;
}
