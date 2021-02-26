import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Faq {
  @Prop()
  question: string;

  @Prop()
  answer: string;

  @Prop()
  order: number;

  @Prop()
  active: boolean;
}

export const FaqSchema = SchemaFactory.createForClass(Faq);
