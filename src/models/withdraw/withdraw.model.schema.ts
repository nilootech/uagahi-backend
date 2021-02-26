import { IncomeTypesEnum } from './enums/income-types.enum';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

@Schema({ timestamps: true })
export class WithdrawModel {
  @Prop()
  type: IncomeTypesEnum;

  @Prop({ type: mongoose.Schema.Types.ObjectId })
  refId: string;

  @Prop()
  amount: number;

  @Prop()
  date: Date;
}

export const WithDrawModelSchema = SchemaFactory.createForClass(WithdrawModel);
