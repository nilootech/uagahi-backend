import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Ticket, TicketDocument, TicketSchema } from './ticket.schema';
import { TicketService } from './ticket.service';
import { TicketResolver } from './ticket.resolver';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: Ticket.name,
        useFactory: () => {
          TicketSchema.pre<TicketDocument>('save', function() {
            this.rate = this.rates.reduce(
              (sum, current) => sum + current.rate,
              0,
            );
            return this;
          });
          return TicketSchema;
        },
      },
    ]),
  ],
  providers: [TicketService, TicketResolver],
})
export class TicketModule {}
