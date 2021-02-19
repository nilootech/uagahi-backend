import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';

@Schema()
export class ContactModel {
  @Prop()
  tels: string[];

  @Prop()
  mobiles: string[];

  @Prop()
  email: string;
}

export const ContactModelSchema = SchemaFactory.createForClass(ContactModel);
