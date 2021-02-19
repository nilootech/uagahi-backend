import { Field, ObjectType } from '@nestjs/graphql';
import mongoose from 'mongoose';
import { UserType } from '../user/user.type';

@ObjectType('MessageModel')
export class MessageModelType {
  @Field()
  from: UserType;

  @Field()
  to: UserType;

  // Todo ref
  @Field()
  ticket: mongoose.Schema.Types.ObjectId;

  @Field()
  messageBody: string;
}
