import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


export type UserDocument = User & Document;

@Schema()
export class User {

  @Prop()
  id: string;

  @Prop()
  name: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  salt: string;

  @Prop()
  birthDate: Date;

  @Prop({
    required: true,
  })
  userName: string;

  @Prop()
  token: string;

}

export const UserSchema = SchemaFactory.createForClass(User);