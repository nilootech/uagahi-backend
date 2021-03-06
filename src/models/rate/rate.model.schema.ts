import { User, UserSchema } from '../../schemas/user/user.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class RateModel {
  @Prop({ required: true })
  rate: number;

  @Prop({ type: UserSchema, required: true })
  user: User;
}

export const RateModelSchema = SchemaFactory.createForClass(RateModel);
