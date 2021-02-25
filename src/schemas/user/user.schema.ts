import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { RoleEnum } from '../../auth/role/role.enum';
import {
  AccountModel,
  AccountModelSchema,
} from '../../models/account/account.model.schema';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
  @Prop()
  name: string;

  @Prop({
    required: true,
    unique: true,
  })
  email: string;

  @Prop({ unique: true })
  mobile: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  salt: string;

  @Prop({ required: true })
  birthDate: Date;

  @Prop()
  accessToken: string;

  @Prop()
  refreshToken: string;

  @Prop({ type: [String] })
  roles: RoleEnum[];

  @Prop({ required: true, default: false })
  active: boolean;

  @Prop({ type: [AccountModelSchema], required: true })
  accounts: AccountModel[];
}

export const UserSchema = SchemaFactory.createForClass(User);
