import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Ticket, TicketSchema } from './ticket.schema';
import { TicketService } from './ticket.service';
import { TicketResolver } from './ticket.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Ticket.name, schema: TicketSchema }]),
  ],
  providers: [TicketService, TicketResolver],
})
export class TicketModule {}
