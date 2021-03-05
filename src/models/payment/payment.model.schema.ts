import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class PaymentModel {
  @Prop()
  amount: number;

  @Prop()
  date: Date;

  @Prop()
  bank: string;

  @Prop()
  traceCode: string;
}

export const PaymentModelSchema = SchemaFactory.createForClass(PaymentModel);
