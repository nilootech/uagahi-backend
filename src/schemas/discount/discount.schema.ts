import { IncomeTypesEnum } from '../../models/withdraw/enums/income-types.enum';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DiscountDocument = Discount & Document;

@Schema({ timestamps: true })
export class Discount {
  @Prop()
  name: string;

  @Prop()
  code: string;

  @Prop({ type: [IncomeTypesEnum] })
  types: IncomeTypesEnum[];

  @Prop()
  fromDate: Date;

  @Prop()
  toDate: Date;

  @Prop()
  active: boolean;
}

export const DiscountSchema = SchemaFactory.createForClass(Discount);
