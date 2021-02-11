import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


export type UserDocument = User & Document;

@Schema()
export class User {

  @Prop({ type: mongoose.Schema.Types.ObjectId })
  _id: string;

  @Prop()
  name: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  salt: string;

  @Prop()
  birthDate: Date;

  @Prop({
    required: true,
  })
  userName: string;

  @Prop()
  accessToken: string;

  @Prop()
  refreshToken: string;

}

export const UserSchema = SchemaFactory.createForClass(User);