import { User, UserSchema } from '../../schemas/user/user.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class ReportModel {
  @Prop({ type: UserSchema })
  user: User;

  @Prop()
  description: string;
}

export const ReportModelSchema = SchemaFactory.createForClass(ReportModel);
