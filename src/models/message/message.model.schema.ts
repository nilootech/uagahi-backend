import { User, UserSchema } from '../../schemas/user/user.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class MessageModel {
  @Prop({ type: UserSchema, required: true })
  from: User;

  @Prop({ type: UserSchema, required: true })
  to: User;

  @Prop()
  ticketId: string;

  @Prop()
  messageBody: string;

  @Prop({ default: false })
  deliver: boolean;
}

export const MessageModelSchema = SchemaFactory.createForClass(MessageModel);
