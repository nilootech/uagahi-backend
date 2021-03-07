import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Ticket, TicketDocument } from './ticket.schema';
import { Model } from 'mongoose';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';
import { GetAllTicketInput } from './inputs/get-all-ticket.input';

@Injectable()
export class TicketService {
  constructor(
    @InjectModel(Ticket.name)
    private ticketModel: Model<TicketDocument>,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
  ) {}

  async getAll(getAllTicketInput: GetAllTicketInput) {
    const query = {};
    if (getAllTicketInput.active) {
      query['active'] = getAllTicketInput.active;
    }
    const date = {};
    if (getAllTicketInput.fromDate) {
      date['$gte'] = getAllTicketInput.fromDate;
    }
    if (getAllTicketInput.toDate) {
      date['$lte'] = getAllTicketInput.toDate;
    }
    if (Object.keys(date).length) {
      query['createdAt'] = date;
    }

    return await this.ticketModel
      .find(query)
      .where('category')
      .in(getAllTicketInput.categories)
      .skip(getAllTicketInput.pagination.skip)
      .limit(getAllTicketInput.pagination.limit)
      .exec();
  }
}
