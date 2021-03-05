import { Field, ObjectType } from '@nestjs/graphql';
import { ContactModelType } from '../../models/contact/contact.model.type';

@ObjectType('ContactUs')
export class ContactusType {
  @Field(() => ContactModelType)
  contact: ContactModelType;
}
