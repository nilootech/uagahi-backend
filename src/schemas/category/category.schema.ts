import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Ticket } from '../ticket/ticket.schema';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export type CategoryDocument = Category & Document;

@Schema()
export class Category {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  order: number;

  @Prop()
  active: boolean;

  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'Ticket' }])
  tickets: Ticket[];
}

export const CategorySchema = SchemaFactory.createForClass(Category);
