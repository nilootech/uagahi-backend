import { TicketService } from './ticket.service';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { GetAllTicketInput } from './inputs/get-all-ticket.input';
import { TicketType } from './ticket.type';

@Resolver(() => TicketType)
export class TicketResolver {
  constructor(private ticketService: TicketService) {}

  @Query(() => [TicketType])
  getAllTicket(
    @Args('getAllTicketInput') getAllTicketInput: GetAllTicketInput,
  ) {
    return this.ticketService.getAll(getAllTicketInput);
  }
}
