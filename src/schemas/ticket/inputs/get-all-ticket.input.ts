import { Field, InputType } from '@nestjs/graphql';
import { PaginationModelInput } from '../../../models/public/inputs/pagination.model.input';
import { MaxLength, MinLength } from 'class-validator';
import { IDLength } from '../../../constants/index.constant';
import { SortTicketModelInput } from './sort-ticket.model.input';

@InputType()
export class GetAllTicketInput {
  @Field()
  pagination: PaginationModelInput;

  @Field({ nullable: true })
  fromDate?: Date;

  @Field({ nullable: true })
  toDate?: Date;

  @Field({ nullable: true })
  active?: boolean;

  @Field(() => [String], { nullable: true })
  @MaxLength(IDLength, { each: true })
  @MinLength(IDLength, { each: true })
  categories: string[];

  @Field({ nullable: true })
  sort: SortTicketModelInput;
}
