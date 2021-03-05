import { Field, ID, InputType } from '@nestjs/graphql';
import { UserType } from '../../schemas/user/user.type';

@InputType()
export class MessageModelInput {
  @Field(() => ID)
  _id: string;

  @Field()
  from: UserType;

  @Field()
  to: UserType;

  @Field()
  ticketId: string;

  @Field()
  messageBody: string;
}
