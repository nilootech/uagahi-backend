import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Role } from '../../auth/role/role.enum';
import {
  AccountModel,
  AccountModelSchema,
} from '../account/account.model.schema';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
  @Prop({ type: String })
  name: string;

  @Prop({
    type: String,
    required: true,
    unique: true,
  })
  email: string;

  @Prop({ type: String, unique: true })
  mobile: string;

  @Prop({ type: String, required: true })
  password: string;

  @Prop({ type: String, required: true })
  salt: string;

  @Prop({ type: Date, required: true })
  birthDate: Date;

  @Prop({ type: String })
  accessToken: string;

  @Prop({ type: String })
  refreshToken: string;

  @Prop({ type: [String] })
  roles: Role[];

  @Prop({ type: Boolean, required: true, default: false })
  active: boolean;

  @Prop({ type: [AccountModelSchema], required: true })
  accounts: AccountModel[];
}

export const UserSchema = SchemaFactory.createForClass(User);
