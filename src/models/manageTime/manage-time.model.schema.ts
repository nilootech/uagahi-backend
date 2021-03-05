import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ _id: false })
export class ManageTimeModel {
  @Prop()
  publishTime: Date;
}

export const ManageTimeModelSchema = SchemaFactory.createForClass(
  ManageTimeModel,
);
