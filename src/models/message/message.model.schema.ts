import { User, UserSchema } from '../user/user.schema';
import { Prop, Schema } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

@Schema({ timestamps: true })
export class MessageModel {
  @Prop({ type: UserSchema, required: true })
  from: User;

  @Prop({ type: UserSchema, required: true })
  to: User;

  // Todo ref
  @Prop()
  ticket: mongoose.Schema.Types.ObjectId;

  @Prop()
  messageBody: string;
}
