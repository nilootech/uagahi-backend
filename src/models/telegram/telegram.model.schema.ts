import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { DoingModel, DoingModelSchema } from '../doing/doing.model.schema';

@Schema({ timestamps: true })
export class TelegramModel {
  @Prop()
  imageUrl: string;

  @Prop()
  text: string;

  @Prop()
  price: number;

  @Prop({ type: DoingModelSchema })
  doing: DoingModel;
}

export const TelegramModelSchema = SchemaFactory.createForClass(TelegramModel);
