import {
  BadRequestException,
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { VehicleBrand, VehicleBrandDocument } from './vehicle-brand.schema';
import { Model } from 'mongoose';
import { CreateVehicleBrandInput } from './inputs/create-vehicle-brand.input';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';
import { UpdateVehicleBrandInput } from './inputs/update-vehicle-brand.input';

@Injectable()
export class VehicleBrandService {
  constructor(
    @InjectModel(VehicleBrand.name)
    private vehicleBrandModel: Model<VehicleBrandDocument>,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
  ) {}

  async get(id: string): Promise<VehicleBrandDocument> {
    if (!id || id === '') {
      throw new BadRequestException('id is empty');
    }
    const find = await this.vehicleBrandModel.findById(id);
    if (!find) throw new NotFoundException('record not found');
    return find;
  }

  async create(
    createVehicleBrandInput: CreateVehicleBrandInput,
  ): Promise<VehicleBrandDocument> {
    const vehicleBrand = new VehicleBrand();
    vehicleBrand.models = createVehicleBrandInput.models;
    vehicleBrand.name = createVehicleBrandInput.name;
    try {
      const createVehicleBrand = new this.vehicleBrandModel(vehicleBrand);
      return await createVehicleBrand.save();
    } catch (e) {
      this.logger.log('error', e.message);
      throw new InternalServerErrorException(e.message);
    }
  }

  async getAll(): Promise<VehicleBrandDocument[]> {
    return this.vehicleBrandModel.find();
  }

  async update(
    updateVehicleBrandInput: UpdateVehicleBrandInput,
  ): Promise<VehicleBrandDocument> {
    const find = await this.get(updateVehicleBrandInput._id);
    find.name = updateVehicleBrandInput.name;
    find.models = updateVehicleBrandInput.models;
    try {
      return await find.save();
    } catch (e) {
      this.logger.log('error', e.message);
      throw new InternalServerErrorException(e.message);
    }
  }
}
