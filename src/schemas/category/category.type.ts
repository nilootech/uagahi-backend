import { Field, ObjectType } from '@nestjs/graphql';
import { TicketType } from '../ticket/ticket.type';

@ObjectType('Category')
export class CategoryType {
  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  order: number;

  @Field()
  active: boolean;

  @Field(() => [TicketType])
  tickets: TicketType[];
}
