import { registerEnumType } from '@nestjs/graphql';

export enum SortTicketEnum {
  ByDate,
  ByRate,
  ByVisit,
  ByStarCount,
}
registerEnumType(SortTicketEnum, {
  name: 'SortTicketEnum',
});
