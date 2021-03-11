import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Ticket, TicketDocument } from './ticket.schema';
import { Model } from 'mongoose';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';
import { GetAllTicketInput } from './inputs/get-all-ticket.input';
import { SortTicketEnum } from './enums/sort-ticket.enum';

@Injectable()
export class TicketService {
  constructor(
    @InjectModel(Ticket.name)
    private ticketModel: Model<TicketDocument>,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
  ) {}

  async getAll(
    getAllTicketInput: GetAllTicketInput,
  ): Promise<TicketDocument[]> {
    const {
      sort,
      categories,
      toDate,
      fromDate,
      pagination,
      active,
    } = getAllTicketInput;
    const query = {};
    if (active) {
      query['active'] = active;
    }
    const date = {};
    if (fromDate) {
      date['$gte'] = fromDate;
    }
    if (toDate) {
      date['$lte'] = toDate;
    }
    if (Object.keys(date).length) {
      query['createdAt'] = date;
    }
    let sortQuery = {};
    switch (sort.sortBy) {
      case SortTicketEnum.ByDate:
        sortQuery = { createdAt: sort.type };
        break;
      case SortTicketEnum.ByRate:
        sortQuery = {};
        break;
    }
    return await this.ticketModel
      .find(query)
      .sort(sortQuery)
      .where('category')
      .in(categories)
      .skip(pagination.skip)
      .limit(pagination.limit)
      .exec();
  }
}
