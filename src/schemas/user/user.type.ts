import { Field, ID, ObjectType } from '@nestjs/graphql';
import { RoleEnum } from '../../auth/role/role.enum';
import { AccountModelType } from '../../models/account/account.model.type';
import { TicketType } from '../ticket/ticket.type';
import { AdsType } from '../ads/ads.type';

@ObjectType('User')
export class UserType {
  @Field(() => ID)
  _id: string;

  @Field()
  name: string;

  @Field()
  birthDate: Date;

  @Field()
  email: string;

  @Field(() => [RoleEnum])
  roles: RoleEnum[];

  @Field()
  active: boolean;

  @Field()
  mobile: string;

  @Field(() => [AccountModelType])
  accounts: AccountModelType[];

  @Field(() => [TicketType])
  tickets: TicketType[];

  @Field()
  balance: number;

  @Field(() => [AdsType])
  advises: AdsType[];
}
