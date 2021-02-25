import { Field, ID, InputType } from '@nestjs/graphql';
import { UserType } from '../../schemas/user/user.type';
import mongoose from 'mongoose';

@InputType()
export class MessageModelInput {
  @Field(() => ID)
  _id: string;

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
