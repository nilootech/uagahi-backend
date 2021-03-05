import { Field, ObjectType } from '@nestjs/graphql';
import { UserType } from '../../schemas/user/user.type';

@ObjectType('MessageModel')
export class MessageModelType {
  @Field(() => UserType)
  from: UserType;

  @Field(() => UserType)
  to: UserType;

  @Field()
  ticketId: string;

  @Field()
  messageBody: string;

  @Field()
  deliver: boolean;
}
