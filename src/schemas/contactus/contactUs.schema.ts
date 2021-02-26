import {
  ContactModel,
  ContactModelSchema,
} from '../../models/contact/contact.model.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ _id: false })
export class ContactUs {
  @Prop({ type: ContactModelSchema, required: true })
  contact: ContactModel;
}

export const ContactUsSchema = SchemaFactory.createForClass(ContactUs);
