import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class AccountUser {
  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: Number, required: true })
  countTicketPerDay: number;

  @Prop({ type: Boolean, required: true })
  active: boolean;

  @Prop({ type: Date, required: true })
  fromDate: Date;

  @Prop({ type: Date, required: true })
  toDate: Date;
}

export const AccountUserSchema = SchemaFactory.createForClass(AccountUser);
