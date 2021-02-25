import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ _id: false })
export class DoingModel {
  @Prop()
  active: boolean;

  @Prop()
  doing: boolean;

  @Prop()
  doingDate: Date;
}

export const DoingModelSchema = SchemaFactory.createForClass(DoingModel);
