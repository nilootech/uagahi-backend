import { Field, InputType } from '@nestjs/graphql';
import { PaginationModelInput } from '../../../models/public/inputs/pagination.model.input';
import { SortInput } from '../../../models/public/inputs/sort.input';
import { MaxLength, MinLength } from 'class-validator';
import { IDLength } from '../../../constants/index.constant';

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

  @Field()
  @MaxLength(IDLength, { each: true })
  @MinLength(IDLength, { each: true })
  categories: string[];

  @Field(() => [SortInput])
  sorts: SortInput[];
}
