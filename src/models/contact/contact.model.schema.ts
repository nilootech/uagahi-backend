import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';

@Schema({ _id: false })
export class ContactModel {
  @Prop({ type: [String] })
  tels: string[];

  @Prop({ type: [String] })
  mobiles: string[];

  @Prop()
  email: string;
}

export const ContactModelSchema = SchemaFactory.createForClass(ContactModel);
