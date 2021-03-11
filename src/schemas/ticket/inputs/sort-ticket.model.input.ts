import { SortTicketEnum } from '../enums/sort-ticket.enum';
import { Field, InputType } from '@nestjs/graphql';
import { SortTypeEnum } from '../../../models/public/enums/sort-type.enum';

@InputType()
export class SortTicketModelInput {
  @Field(() => SortTicketEnum)
  sortBy: SortTicketEnum;

  @Field(() => SortTypeEnum)
  type: SortTypeEnum;
}
