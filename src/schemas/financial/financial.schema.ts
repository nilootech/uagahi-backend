import { FinancialTypeEnum } from './enums/financial-type.enum';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {
  PaymentModel,
  PaymentModelSchema,
} from '../../models/payment/payment.model.schema';
import {
  WithdrawModel,
  WithDrawModelSchema,
} from '../../models/withdraw/withdraw.model.schema';
import * as mongoose from 'mongoose';
import { User } from '../user/user.schema';

@Schema({ timestamps: true })
export class Financial {
  @Prop()
  type: FinancialTypeEnum;

  @Prop({ type: PaymentModelSchema, default: null })
  payment: PaymentModel;

  @Prop({ type: WithDrawModelSchema, default: null })
  withdraw: WithdrawModel;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;
}

export const FinancialSchema = SchemaFactory.createForClass(Financial);
