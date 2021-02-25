import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class AccountModel {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  countTicketPerDay: number;

  @Prop({ required: true })
  active: boolean;

  @Prop({ required: true })
  fromDate: Date;

  @Prop({ required: true })
  toDate: Date;
}

export const AccountModelSchema = SchemaFactory.createForClass(AccountModel);
