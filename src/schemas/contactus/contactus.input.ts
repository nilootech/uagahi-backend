import { Field, InputType } from '@nestjs/graphql';
import { ContactModelInput } from '../../models/contact/contact.model.input';

@InputType()
export class ContactusInput {
  @Field()
  contact: ContactModelInput;
}
