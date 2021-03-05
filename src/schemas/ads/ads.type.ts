import { User } from '../user/user.schema';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { AdsLocationType } from '../adsLocation/ads-location.type';
import { Ads } from './ads.schema';
import { UserType } from '../user/user.type';

@ObjectType('Ads')
export class AdsType {
  @Field(() => ID)
  _id: string;

  @Field()
  gifUrl: string;

  @Field(() => AdsLocationType)
  adsLocation: AdsLocationType;

  @Field()
  link: string;

  @Field()
  title: string;

  @Field()
  fromDateTime: Date;

  @Field()
  toDateTime: Date;

  @Field(() => UserType)
  user: UserType;
}
